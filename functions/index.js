"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
const functions = require("firebase-functions");
const express = require("express");
const platform_server_1 = require("@angular/platform-server");
const core_1 = require("@angular/core");
const fs = require("fs");
const rxjs_1 = require("rxjs");
//Hello
global.WebSocket = require('ws');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
/**
 * Create a Cloud Function HTTPS Trigger configured to generate
 * Angular Universal responses.
 * @param config
 */
exports.trigger = (config) => {
    return functions.https.onRequest(createExpressApp(config));
};
/**
 * Create an express app configued to generate Angular Universal
 * responses. Note: a static directory that contains your static
 * Angular assets must be supplied. Otherwise each asset request
 * will trigger a dynamic response.
 * @param config
 */
function createExpressApp(config) {
    const router = express();
    /**
     * An express static directory is not usually neccessary when
     * in use with Firebase Hosting. Hosting will always prefer
     * existing static assets to dynamic routes.
     */
    if (valueExists(config.staticDirectory)) {
        router.use(express.static(config.staticDirectory));
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
function valueExists(value) {
    return !(typeof value === 'undefined' || value === null);
}
/**
 * Checks a given configuration for Cache-Control header values
 * and either returns the supplied values or the default values (0).
 * @param config
 */
function checkCacheControlValue(config) {
    let cdnCacheExpiry = 0;
    let browserCacheExpiry = 0;
    let staleWhileRevalidate = 0;
    if (valueExists(config.cdnCacheExpiry)) {
        cdnCacheExpiry = config.cdnCacheExpiry;
    }
    if (valueExists(config.browserCacheExpiry)) {
        browserCacheExpiry = config.browserCacheExpiry;
    }
    if (valueExists(config.staleWhileRevalidate)) {
        staleWhileRevalidate = config.staleWhileRevalidate;
    }
    return { cdnCacheExpiry, browserCacheExpiry, staleWhileRevalidate };
}
/**
 * Returns the Cache-Control header value given a config object.
 * @param config
 */
function getCacheControlHeader(config) {
    const { cdnCacheExpiry, browserCacheExpiry, staleWhileRevalidate } = checkCacheControlValue(config);
    return `public, max-age=${browserCacheExpiry}, s-maxage=${cdnCacheExpiry}, stale-while-revalidate=${staleWhileRevalidate}`;
}
/**
 * Create a single observable of a file system read
 * @param file the file path to read
 */
function readFile$(file) {
    return rxjs_1.Observable.create((observer) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                observer.error(err);
            }
            else {
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
function angularUniversal({ index, main, staticDirectory, enableProdMode = false, extraProviders }) {
    if (enableProdMode) {
        core_1.enableProdMode();
    }
    return (req, res) => {
        readFile$(index)
            .mergeMap(document => {
            const url = req.path;
            const AppServerModuleNgFactory = require(main).AppServerModuleNgFactory;
            return rxjs_1.Observable.from(platform_server_1.renderModuleFactory(AppServerModuleNgFactory, { document, url, extraProviders: extraProviders }));
        })
            .take(1)
            .subscribe(html => { res.send(html); });
    };
}
exports.angularUniversal = angularUniversal;
//
exports.ssr = exports.trigger({
    index: __dirname + '/dist/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 86400,
    browserCacheExpiry: 86400
});
