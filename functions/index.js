"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
const functions = require("firebase-functions");
const express = require("express");
const platform_server_1 = require("@angular/platform-server");
const core_1 = require("@angular/core");
const fs = require("fs");
core_1.enableProdMode();
const document = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle');
const app = express();
app.get('**', (req, res) => {
    const url = req.path;
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, { document, url })
        .then(html => {
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    })
        .catch(e => {
        console.log(e);
    });
});
exports.ssr = functions.https.onRequest(app);
