!function(n,e){for(var l in e)n[l]=e[l]}(exports,function(n){var e={};function l(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=n,l.c=e,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l(l.s=0)}({"+hWK":function(n,e){n.exports=require("angularfire2")},0:function(n,e,l){n.exports=l("Zq8w")},"63Zj":function(n,e,l){"use strict";e.styles=["nav[_ngcontent-%COMP%]{top:0;width:100%;background-color:#fff;color:grey;padding:1%;padding-left:15%;padding-right:15%}nav[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]:hover{z-index:9999999}nav[_ngcontent-%COMP%]:hover{background-color:#3e3d3d;color:#fff;background:#3e3d3d;-webkit-transition:background .5s;-webkit-box-shadow:0 0 15px #6f6f6f;box-shadow:0 0 15px #6f6f6f}"]},"7MAc":function(n,e,l){"use strict";e.styles=[""]},"8wGh":function(n,e){n.exports=require("@angular/animations/browser")},"9nEs":function(n,e,l){"use strict";var t=l("OQ0P"),o=l("FAeD"),u=l("UF2k"),r=l("A7Ap"),i=l("Ez4e"),p=l("t4+y");e.AboutModuleNgFactory=t.\u0275cmf(o.AboutModule,[],function(n){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[u.AboutComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(512,r.RouterModule,r.RouterModule,[[2,r.\u0275a],[2,r.Router]]),t.\u0275mpd(512,i.AboutRoutingModule,i.AboutRoutingModule,[]),t.\u0275mpd(512,o.AboutModule,o.AboutModule,[]),t.\u0275mpd(1024,r.ROUTES,function(){return[[{path:"",component:p.AboutComponent}]]},[])])})},A7Ap:function(n,e){n.exports=require("@angular/router")},ASwt:function(n,e){n.exports=require("@angular/platform-server")},DBRd:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),l("XLYC"),e.PostsComponent=function(){function n(n){this.afs=n,this.postsCollection=n.collection("posts"),this.posts=this.postsCollection.valueChanges()}return n.prototype.ngOnInit=function(){},n}()},DWv5:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NavComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},Ez4e:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=l("t4+y");e.AboutRoutingModule=function(){function n(){}return n.components=[t.AboutComponent],n}()},FAeD:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AboutModule=function(){}},"Hq/i":function(n,e){n.exports=require("@angular/platform-browser/animations")},Ir0Z:function(n,e){n.exports=require("@angular/common/http")},JwoV:function(n,e,l){"use strict";var t=l("OQ0P"),o=l("bNRb"),u=l("wQAS"),r=l("RpEc"),i=l("gou4"),p=l("Ir0Z"),d=l("yv0u"),a=l("ASwt"),c=l("wp5R"),s=l("8wGh"),m=l("Hq/i"),f=l("A7Ap"),g=l("+hWK"),A=l("XLYC"),C=l("f9NF"),M=l("l0JX"),R=l("DBRd"),y=l("vnfH"),v=l("LpzL"),h=l("T2Au"),N=l("aR8+");e.AppServerModuleNgFactory=t.\u0275cmf(o.AppServerModule,[u.AppComponent],function(n){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[r.PostsComponentNgFactory,i.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(4608,p.HttpXsrfTokenExtractor,p.\u0275h,[d.DOCUMENT,t.PLATFORM_ID,p.\u0275f]),t.\u0275mpd(4608,p.\u0275i,p.\u0275i,[p.HttpXsrfTokenExtractor,p.\u0275g]),t.\u0275mpd(5120,p.HTTP_INTERCEPTORS,function(n){return[n]},[p.\u0275i]),t.\u0275mpd(4608,p.XhrFactory,a.\u0275d,[]),t.\u0275mpd(4608,p.HttpXhrBackend,p.HttpXhrBackend,[p.XhrFactory]),t.\u0275mpd(6144,p.HttpBackend,null,[p.HttpXhrBackend]),t.\u0275mpd(5120,p.HttpHandler,a.\u0275g,[p.HttpBackend,[2,p.HTTP_INTERCEPTORS]]),t.\u0275mpd(4608,p.HttpClient,p.HttpClient,[p.HttpHandler]),t.\u0275mpd(4608,p.\u0275e,p.\u0275e,[]),t.\u0275mpd(5120,t.LOCALE_ID,t.\u0275q,[[3,t.LOCALE_ID]]),t.\u0275mpd(4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d.\u0275a]]),t.\u0275mpd(5120,t.IterableDiffers,t.\u0275n,[]),t.\u0275mpd(5120,t.KeyValueDiffers,t.\u0275o,[]),t.\u0275mpd(4608,c.DomSanitizer,c.\u0275e,[d.DOCUMENT]),t.\u0275mpd(6144,t.Sanitizer,null,[c.DomSanitizer]),t.\u0275mpd(4608,c.HAMMER_GESTURE_CONFIG,c.HammerGestureConfig,[]),t.\u0275mpd(5120,c.EVENT_MANAGER_PLUGINS,function(n,e,l,t,o){return[new c.\u0275DomEventsPlugin(n,e),new c.\u0275KeyEventsPlugin(l),new c.\u0275HammerGesturesPlugin(t,o)]},[d.DOCUMENT,t.NgZone,d.DOCUMENT,d.DOCUMENT,c.HAMMER_GESTURE_CONFIG]),t.\u0275mpd(4608,c.EventManager,c.EventManager,[c.EVENT_MANAGER_PLUGINS,t.NgZone]),t.\u0275mpd(135680,c.\u0275DomSharedStylesHost,c.\u0275DomSharedStylesHost,[d.DOCUMENT]),t.\u0275mpd(4608,c.\u0275DomRendererFactory2,c.\u0275DomRendererFactory2,[c.EventManager,c.\u0275DomSharedStylesHost]),t.\u0275mpd(4608,a.\u0275c,a.\u0275c,[c.DOCUMENT,[2,c.\u0275TRANSITION_ID]]),t.\u0275mpd(6144,c.\u0275SharedStylesHost,null,[a.\u0275c]),t.\u0275mpd(4608,a.\u0275ServerRendererFactory2,a.\u0275ServerRendererFactory2,[t.NgZone,c.DOCUMENT,c.\u0275SharedStylesHost]),t.\u0275mpd(4608,s.AnimationDriver,s.\u0275NoopAnimationDriver,[]),t.\u0275mpd(5120,s.\u0275AnimationStyleNormalizer,m.\u0275d,[]),t.\u0275mpd(4608,s.\u0275AnimationEngine,m.\u0275b,[s.AnimationDriver,s.\u0275AnimationStyleNormalizer]),t.\u0275mpd(5120,t.RendererFactory2,a.\u0275a,[a.\u0275ServerRendererFactory2,s.\u0275AnimationEngine,t.NgZone]),t.\u0275mpd(4352,t.Testability,null,[]),t.\u0275mpd(4608,c.Meta,c.Meta,[d.DOCUMENT]),t.\u0275mpd(4608,c.Title,c.Title,[d.DOCUMENT]),t.\u0275mpd(5120,f.ActivatedRoute,f.\u0275f,[f.Router]),t.\u0275mpd(4608,f.PreloadAllModules,f.PreloadAllModules,[]),t.\u0275mpd(6144,f.PreloadingStrategy,null,[f.PreloadAllModules]),t.\u0275mpd(135680,f.RouterPreloader,f.RouterPreloader,[f.Router,t.NgModuleFactoryLoader,t.Compiler,t.Injector,f.PreloadingStrategy]),t.\u0275mpd(4608,f.NoPreloading,f.NoPreloading,[]),t.\u0275mpd(5120,f.ROUTER_INITIALIZER,f.\u0275i,[f.\u0275g]),t.\u0275mpd(5120,t.APP_BOOTSTRAP_LISTENER,function(n){return[n]},[f.ROUTER_INITIALIZER]),t.\u0275mpd(5120,g.FirebaseApp,g.\u0275a,[g.FirebaseAppConfigToken,g.FirebaseAppName]),t.\u0275mpd(4608,A.AngularFirestore,A.AngularFirestore,[g.FirebaseApp,[2,A.\u0275a]]),t.\u0275mpd(4608,C.BrowserXhr,a.\u0275d,[]),t.\u0275mpd(4608,C.ResponseOptions,C.BaseResponseOptions,[]),t.\u0275mpd(4608,C.XSRFStrategy,a.\u0275e,[]),t.\u0275mpd(4608,C.XHRBackend,C.XHRBackend,[C.BrowserXhr,C.ResponseOptions,C.XSRFStrategy]),t.\u0275mpd(4608,C.RequestOptions,C.BaseRequestOptions,[]),t.\u0275mpd(5120,C.Http,a.\u0275f,[C.XHRBackend,C.RequestOptions]),t.\u0275mpd(4608,M.AnimationBuilder,m.\u0275BrowserAnimationBuilder,[t.RendererFactory2,c.DOCUMENT]),t.\u0275mpd(512,p.HttpClientXsrfModule,p.HttpClientXsrfModule,[]),t.\u0275mpd(512,p.HttpClientModule,p.HttpClientModule,[]),t.\u0275mpd(512,d.CommonModule,d.CommonModule,[]),t.\u0275mpd(1024,t.ErrorHandler,c.\u0275a,[]),t.\u0275mpd(1024,t.NgProbeToken,function(){return[f.\u0275b()]},[]),t.\u0275mpd(512,f.\u0275g,f.\u0275g,[t.Injector]),t.\u0275mpd(256,t.APP_ID,"comchriscerk",[]),t.\u0275mpd(2048,c.\u0275TRANSITION_ID,null,[t.APP_ID]),t.\u0275mpd(1024,t.APP_INITIALIZER,function(n,e,l,t,o){return[c.\u0275h(n),f.\u0275h(e),c.\u0275f(l,t,o)]},[[2,t.NgProbeToken],f.\u0275g,c.\u0275TRANSITION_ID,d.DOCUMENT,t.Injector]),t.\u0275mpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.\u0275mpd(131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t.\u0275Console,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.\u0275mpd(512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.\u0275mpd(512,c.BrowserModule,c.BrowserModule,[[3,c.BrowserModule]]),t.\u0275mpd(1024,f.\u0275a,f.\u0275d,[[3,f.Router]]),t.\u0275mpd(512,f.UrlSerializer,f.DefaultUrlSerializer,[]),t.\u0275mpd(512,f.ChildrenOutletContexts,f.ChildrenOutletContexts,[]),t.\u0275mpd(256,f.ROUTER_CONFIGURATION,{preloadingStrategy:f.PreloadAllModules},[]),t.\u0275mpd(1024,d.LocationStrategy,f.\u0275c,[d.PlatformLocation,[2,d.APP_BASE_HREF],f.ROUTER_CONFIGURATION]),t.\u0275mpd(512,d.Location,d.Location,[d.LocationStrategy]),t.\u0275mpd(512,t.Compiler,t.Compiler,[]),t.\u0275mpd(512,t.NgModuleFactoryLoader,t.SystemJsNgModuleLoader,[t.Compiler,[2,t.SystemJsNgModuleLoaderConfig]]),t.\u0275mpd(1024,f.ROUTES,function(){return[[{path:"",pathMatch:"full",redirectTo:"/about"},{path:"about",loadChildren:"app/about/about.module#AboutModule"},{path:"posts",component:R.PostsComponent},{path:"**",pathMatch:"full",redirectTo:"/about"}]]},[]),t.\u0275mpd(1024,f.Router,f.\u0275e,[t.ApplicationRef,f.UrlSerializer,f.ChildrenOutletContexts,d.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,f.ROUTES,f.ROUTER_CONFIGURATION,[2,f.UrlHandlingStrategy],[2,f.RouteReuseStrategy]]),t.\u0275mpd(512,f.RouterModule,f.RouterModule,[[2,f.\u0275a],[2,f.Router]]),t.\u0275mpd(512,y.AppRoutingModule,y.AppRoutingModule,[]),t.\u0275mpd(512,v.CoreModule,v.CoreModule,[]),t.\u0275mpd(512,h.SharedModule,h.SharedModule,[]),t.\u0275mpd(512,g.AngularFireModule,g.AngularFireModule,[]),t.\u0275mpd(512,A.AngularFirestoreModule,A.AngularFirestoreModule,[]),t.\u0275mpd(512,N.AppModule,N.AppModule,[]),t.\u0275mpd(512,C.HttpModule,C.HttpModule,[]),t.\u0275mpd(512,m.NoopAnimationsModule,m.NoopAnimationsModule,[]),t.\u0275mpd(512,a.ServerModule,a.ServerModule,[]),t.\u0275mpd(512,o.AppServerModule,o.AppServerModule,[]),t.\u0275mpd(256,p.\u0275f,"XSRF-TOKEN",[]),t.\u0275mpd(256,p.\u0275g,"X-XSRF-TOKEN",[]),t.\u0275mpd(256,g.FirebaseAppConfigToken,{apiKey:"AIzaSyDJMsx2sqmxK4ZZPb_xqT8QYLbNkG6WfGk",authDomain:"comchriscerk.firebaseapp.com",databaseURL:"https://comchriscerk.firebaseio.com",projectId:"comchriscerk",storageBucket:"comchriscerk.appspot.com",messagingSenderId:"289351428854"},[]),t.\u0275mpd(256,g.FirebaseAppName,void 0,[]),t.\u0275mpd(256,A.\u0275a,!0,[])])})},LpzL:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CoreModule=function(){}},OQ0P:function(n,e){n.exports=require("@angular/core")},QK5h:function(n,e,l){"use strict";e.styles=[""]},RpEc:function(n,e,l){"use strict";var t=l("7MAc"),o=l("OQ0P"),u=l("yv0u"),r=l("DBRd"),i=l("XLYC"),p=o.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function d(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n    "])),(n()(),o.\u0275eld(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o.\u0275ted(3,null,["",""])),(n()(),o.\u0275ted(4,null,["\n    ","\n    "])),(n()(),o.\u0275eld(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.\u0275ted(6,null,["",""])),(n()(),o.\u0275ted(-1,null,["\n  "]))],null,function(n,e){n(e,3,0,e.context.$implicit.Name),n(e,4,0,e.context.$implicit.EntryTime),n(e,6,0,e.context.$implicit.Content)})}function a(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,8,"main",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n  "])),(n()(),o.\u0275eld(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Posts"])),(n()(),o.\u0275ted(-1,null,["\n  "])),(n()(),o.\u0275and(16777216,null,null,2,null,d)),o.\u0275did(6,802816,null,0,u.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),o.\u0275pid(131072,u.AsyncPipe,[o.ChangeDetectorRef]),(n()(),o.\u0275ted(-1,null,["\n\n"]))],function(n,e){var l=e.component;n(e,6,0,o.\u0275unv(e,6,0,o.\u0275nov(e,7).transform(l.posts)))},null)}function c(n){return o.\u0275vid(0,[(n()(),o.\u0275and(16777216,null,null,1,null,a)),o.\u0275did(1,16384,null,0,u.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),o.\u0275ted(-1,null,["\n\n"]))],function(n,e){n(e,1,0,e.component.posts)},null)}function s(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"app-posts",[],null,null,null,c,p)),o.\u0275did(1,114688,null,0,r.PostsComponent,[i.AngularFirestore],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_PostsComponent=p,e.View_PostsComponent_0=c,e.View_PostsComponent_Host_0=s,e.PostsComponentNgFactory=o.\u0275ccf("app-posts",r.PostsComponent,s,{},{},[])},T2Au:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SharedModule=function(){}},UF2k:function(n,e,l){"use strict";var t=l("WcK0"),o=l("OQ0P"),u=l("t4+y"),r=o.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function i(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,29,"div",[["itemscope",""],["itemtype","http://schema.org/Person"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n  "])),(n()(),o.\u0275eld(2,0,null,null,6,"header",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n      "])),(n()(),o.\u0275eld(4,0,null,null,0,"img",[["alt","Christopher's Face"],["class","chris-face"],["itemprop","image"],["src","./assets/chriscerk-face-circle.jpg"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n      "])),(n()(),o.\u0275eld(6,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Hi, my name is Chris."])),(n()(),o.\u0275ted(-1,null,["\n  "])),(n()(),o.\u0275ted(-1,null,["\n\n  "])),(n()(),o.\u0275eld(10,0,null,null,8,"p",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["I built and designed "])),(n()(),o.\u0275eld(12,0,null,null,1,"a",[["href","https://www.google.com/search?q=chris%20cerk%20tiny%20house"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["'tiny house'"])),(n()(),o.\u0275ted(-1,null,[". Currently, I am a software developer at "])),(n()(),o.\u0275eld(15,0,null,null,2,"span",[["itemprop","affiliation"]],null,null,null,null,null)),(n()(),o.\u0275eld(16,0,null,null,1,"a",[["href","https://www.hagerty.com"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Hagerty"])),(n()(),o.\u0275ted(-1,null,["."])),(n()(),o.\u0275ted(-1,null,["\n\n  "])),(n()(),o.\u0275eld(20,0,null,null,1,"span",[["itemprop","givenName"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Christopher"])),(n()(),o.\u0275ted(-1,null,[" "])),(n()(),o.\u0275eld(23,0,null,null,1,"span",[["itemprop","familyName"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Cerk"])),(n()(),o.\u0275ted(-1,null,[" | "])),(n()(),o.\u0275eld(26,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),o.\u0275eld(27,0,null,null,1,"a",[["href","https://github.com/chriscerk"]],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["Github"])),(n()(),o.\u0275ted(-1,null,["\n\n"]))],null,null)}function p(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"app-about",[],null,null,null,i,r)),o.\u0275did(1,114688,null,0,u.AboutComponent,[],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_AboutComponent=r,e.View_AboutComponent_0=i,e.View_AboutComponent_Host_0=p,e.AboutComponentNgFactory=o.\u0275ccf("app-about",u.AboutComponent,p,{},{},[])},WcK0:function(n,e,l){"use strict";e.styles=["ul[_ngcontent-%COMP%]{list-style-type:none;white-space:nowrap;padding-left:0;word-spacing:5em}p[_ngcontent-%COMP%]{text-align:left;margin-left:auto;margin-right:auto;font-size:125%;line-height:2em;max-width:500px}li[_ngcontent-%COMP%]{display:inline;text-decoration:none;color:#777}.chris-face[_ngcontent-%COMP%]{padding-top:3%;width:100%;max-width:300px;height:auto}a[_ngcontent-%COMP%]{color:#000;text-decoration:none;font-weight:400}.contact[_ngcontent-%COMP%]{display:inline-block}a[_ngcontent-%COMP%]:hover{color:blue}h1[_ngcontent-%COMP%]{font-family:Roboto,Garamond;font:100 3em Roboto}"]},XLYC:function(n,e){n.exports=require("angularfire2/firestore")},Zq8w:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=l("JwoV");e.AppServerModuleNgFactory=t.AppServerModuleNgFactory;var o=l("9nEs"),u=l("bNRb");e.AppServerModule=u.AppServerModule,e.LAZY_MODULE_MAP={"app/about/about.module#AboutModule":o.AboutModuleNgFactory}},"aR8+":function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AppModule=function(){}},bNRb:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AppServerModule=function(){}},f9NF:function(n,e){n.exports=require("@angular/http")},gCO7:function(n,e,l){"use strict";var t=l("63Zj"),o=l("OQ0P"),u=l("DWv5"),r=o.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function i(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"nav",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n  Chris Cerk\n"])),(n()(),o.\u0275ted(-1,null,["\n"]))],null,null)}function p(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"app-nav",[],null,null,null,i,r)),o.\u0275did(1,114688,null,0,u.NavComponent,[],null,null)],function(n,e){n(e,1,0)},null)}e.RenderType_NavComponent=r,e.View_NavComponent_0=i,e.View_NavComponent_Host_0=p,e.NavComponentNgFactory=o.\u0275ccf("app-nav",u.NavComponent,p,{},{},[])},gou4:function(n,e,l){"use strict";var t=l("QK5h"),o=l("OQ0P"),u=l("gCO7"),r=l("DWv5"),i=l("A7Ap"),p=l("wQAS"),d=o.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function a(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"app-nav",[],null,null,null,u.View_NavComponent_0,u.RenderType_NavComponent)),o.\u0275did(1,114688,null,0,r.NavComponent,[],null,null),(n()(),o.\u0275ted(-1,null,["\n"])),(n()(),o.\u0275eld(3,0,null,null,4,"main",[],null,null,null,null,null)),(n()(),o.\u0275ted(-1,null,["\n  "])),(n()(),o.\u0275eld(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.\u0275did(6,212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null),(n()(),o.\u0275ted(-1,null,["\n"])),(n()(),o.\u0275ted(-1,null,["\n\n\n"]))],function(n,e){n(e,1,0),n(e,6,0)},null)}function c(n){return o.\u0275vid(0,[(n()(),o.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,a,d)),o.\u0275did(1,49152,null,0,p.AppComponent,[],null,null)],null,null)}e.RenderType_AppComponent=d,e.View_AppComponent_0=a,e.View_AppComponent_Host_0=c,e.AppComponentNgFactory=o.\u0275ccf("app-root",p.AppComponent,c,{},{},[])},l0JX:function(n,e){n.exports=require("@angular/animations")},"t4+y":function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AboutComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},vnfH:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),l("DBRd"),e.AppRoutingModule=function(){}},wQAS:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AppComponent=function(){this.title="app"}},wp5R:function(n,e){n.exports=require("@angular/platform-browser")},yv0u:function(n,e){n.exports=require("@angular/common")}}));