import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode as enableProd, Provider, StaticProvider } from '@angular/core';
import * as fs from 'fs';
import { Observable, Observer } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


//Hello

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export type Trigger = functions.TriggerAnnotated & ((req: Express.Request, resp: Express.Response) => void);

export interface FirebaseConfiguration extends ServerConfiguration {
  staticDirectory?: string;
  cdnCacheExpiry: number;
  browserCacheExpiry: number;
  staleWhileRevalidate?: number;
  extraProviders?: StaticProvider[]
}

/**
 * Create a Cloud Function HTTPS Trigger configured to generate
 * Angular Universal responses.
 * @param config 
 */
export let trigger = (config: FirebaseConfiguration): Trigger => {
  return functions.https.onRequest(createExpressApp(config));
};

/**
 * Create an express app configued to generate Angular Universal
 * responses. Note: a static directory that contains your static
 * Angular assets must be supplied. Otherwise each asset request 
 * will trigger a dynamic response.
 * @param config 
 */
function createExpressApp(config: FirebaseConfiguration) {
  const router = express();
  /** 
   * An express static directory is not usually neccessary when  
   * in use with Firebase Hosting. Hosting will always prefer 
   * existing static assets to dynamic routes. 
   */
  if(valueExists(config.staticDirectory)) {
    router.use(express.static(config.staticDirectory!));
  }

  const cacheControlValue = getCacheControlHeader(config);
  // middleware that applies a Cache-Control header to each dynamic response
  router.use((req, res, next) => {
    res.set('Cache-Control', cacheControlValue);
    next();
  });
  
  router.get('/*', angularUniversal(config));
  return router;
}

function valueExists(value?: any) {
  return !(typeof value === 'undefined' || value === null);
}

/**
 * Checks a given configuration for Cache-Control header values 
 * and either returns the supplied values or the default values (0).
 * @param config 
 */
function checkCacheControlValue(config: FirebaseConfiguration) {
  let cdnCacheExpiry = 0
  let browserCacheExpiry = 0;
  let staleWhileRevalidate = 0;
  if(valueExists(config.cdnCacheExpiry)) {
    cdnCacheExpiry = config.cdnCacheExpiry;
  }
  if(valueExists(config.browserCacheExpiry)) {
    browserCacheExpiry = config.browserCacheExpiry;
  }
  if(valueExists(config.staleWhileRevalidate)) {
    staleWhileRevalidate = config.staleWhileRevalidate!;
  }
  return { cdnCacheExpiry, browserCacheExpiry, staleWhileRevalidate };
}

/**
 * Returns the Cache-Control header value given a config object.
 * @param config 
 */
function getCacheControlHeader(config: FirebaseConfiguration) {
  const { cdnCacheExpiry, browserCacheExpiry, staleWhileRevalidate } = checkCacheControlValue(config);
  return `public, max-age=${browserCacheExpiry}, s-maxage=${cdnCacheExpiry}, stale-while-revalidate=${staleWhileRevalidate}`;
}


// 

export interface ServerConfiguration {
  main: string;
  index: string;
  enableProdMode?: boolean;
  staticDirectory?: string;
  extraProviders?: StaticProvider[];
}

/**
 * Create a single observable of a file system read
 * @param file the file path to read
 */
function readFile$(file: string): Observable<string> {
  return Observable.create((observer: Observer<string>) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err) { 
        observer.error(err); 
      } else { 
        observer.next(data);
        observer.complete();
      }
    });
  });
}

/**
 * Create the Angular Universal request handler
 * @param config 
 */
export function angularUniversal({ index, main, staticDirectory, enableProdMode = false, extraProviders }: ServerConfiguration) {
  if (enableProdMode) { enableProd(); }
  return (req: express.Request, res: express.Response) => {
    readFile$(index)
      .mergeMap(document => {
        const url = req.path;
        const AppServerModuleNgFactory = require(main).AppServerModuleNgFactory;
        return Observable.from(renderModuleFactory(AppServerModuleNgFactory, { document, url, extraProviders: extraProviders }))
      })
      .take(1)
      .subscribe(html => { res.send(html); });
  };
}


//

export let ssr = trigger({
    index: __dirname + '/dist/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 86400,
    browserCacheExpiry: 86400
});