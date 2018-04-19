import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as path from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as fs from 'fs';

enableProdMode();

const document = fs.readFileSync(
        __dirname + '/dist/index.html',
        'utf8'
);

const AppServerModuleNgFactory = require(
    __dirname + '/dist-server/main.bundle'
);

const app = express();

app.get('**', (req, res) => {
    const url = req.path;

    renderModuleFactory(
        AppServerModuleNgFactory,
        {document, url}
    )
    .then( html => {
        res.set(
            'Cache-Control',
            'public, max-age=600, s-maxage=1200'
        );
        res.send(html);
    })
    .catch(e => {
        console.log(e);
    });
});

export let ssr = functions.https.onRequest(app);