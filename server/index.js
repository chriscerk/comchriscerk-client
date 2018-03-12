"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angularUniversal = require("angular-universal-express-firebase");
exports.comchriscerk = angularUniversal.trigger({
    index: __dirname + '/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 3600,
    browserCacheExpiry: 86400
});
