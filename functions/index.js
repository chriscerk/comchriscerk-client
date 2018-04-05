"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angularUniversal = require("angular-universal-express-firebase");
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.ssr = angularUniversal.trigger({
    index: __dirname + '/dist/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 86400,
    browserCacheExpiry: 86400 });