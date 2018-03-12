import { enableProdMode } from '@angular/core';
import * as angularUniversal from 'angular-universal-express-firebase';
export let comchriscerk = angularUniversal.trigger({
    index: __dirname + '/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 3600,
    browserCacheExpiry: 86400
});