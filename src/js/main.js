!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});
// !function(i) {
//   function e(i) {
//     return i.timeInterval = setInterval(function() {
//       i.callbackFunction(i);
//     }, i.blinkInterval), i.timeInterval;
//   }
//   function t(t,n,l,o) {
//     if (t.mftTitleBlink[o]) {
//       var r,a,c,s = {}, d = (new Date).getTime();
//       switch (t.mftTitleAltText[o]) {
//         case "none": s = n.mftTitleAltText[o];
//         break;
//         case "": s = n.mftTitleAltText[o];
//         break;
//         default: s = t.mftTitleAltText[o];
//       };
//       c=function (e) {
//         i(document).prop("title") == e.oldTitle ? i(document).prop("title",e.newTitle) : i(document).prop("title",e.oldTitle);
//       };
//       l[o] = {
//         oldTitle : i(document).prop("title"),
//         newTitle : s,
//         blinkInterval : t.mftTitleBlinkInterval[o],
//         timeInterval : 0,
//         now : a,
//         then : d,
//         delta : r,
//         callbackFunction:c
//       };
//       l[o].timeInterval = e(l[o])
//     }
//   }
//   function n (i, e, t) {
//     i.mftTitleBlink[t]&&void 0 !== e[t]&&e[t].timeInterval > 0&&clearInterval(e[t].timeInterval);
//   }
//   function l (t,n,l,o) {
//     if (t.mftFaviconBlink[o]) {
//       var r,a,c,s = {},
//       d = {
//         "apple-touch-icon-precomposed" : i('link[rel="apple-touch-icon-precomposed"]').attr("href"),
//         icon : i('link[rel="icon"]').attr("href"),
//         "shortcut icon" : i('link[rel="shortcut icon"]').attr("href")
//       },
//       f = (new Date).getTime();
//       switch (t.mftFaviconAltIcon[o]) {
//         case "none" : s = n.mftFaviconAltIcon[o];
//         break;
//         case "" : s = n.mftFaviconAltIcon[o];
//         break;
//         default : s = t.mftFaviconAltIcon[o]
//       }
//       c = function (e) {
//         if (Object.keys(e.oldFavicon).length > 0) {
//           for(var t in e.oldFavicon) {
//             e.oldFavicon.hasOwnProperty(t)&&(i('link[rel="'+t+'"]').attr("href") == e.oldFavicon[t] ? i('link[rel="'+t+'"]').attr("href",e.newFavicon[t]) : i('link[rel="'+t+'"]').attr("href") == e.newFavicon[t]&&i('link[rel="'+t+'"]').attr("href",e.oldFavicon[t]))
//           }
//         }
//       },
//       l[o] = {oldFavicon:d, newFavicon:s, blinkInterval:t.mftFaviconBlinkInterval[o], timeInterval:0, now:a, then:f, delta:r, callbackFunction:c
//       },
//       l[o].timeInterval = e(l[o])
//     }
//   }
//   function o (i,e,t) {
//     i.mftFaviconBlink[t]&&void 0 !== e[t]&&e[t].timeInterval > 0&&clearInterval(e[t].timeInterval);
//   }
//   function r (t,n,l,o) {
//     if (t.mftTitleMarquee[o]) {
//       var r,a,c,s,d = (new Date).getTime(),
//       f = i(document).prop("title").split("");
//       switch (f.push(" "), t.mftTitleMarqueeDir[o]) {
//         case "left" : r = function(i) {
//           i.push(i.shift())
//         };
//         break;
//         case "right" : r = function (i) {
//           i.unshift(i.pop())
//         }
//       }
//       s = function (e) {
//         e.shifted(e.myText),
//         i(document).prop("title",e.myText.join(""))
//       },
//       l[o] = {
//         shifted : r,
//         blinkInterval : t.mftTitleMarqueeDelay[o],
//         timeInterval : 0,
//         myText : f,
//         now : c,
//         then : d,
//         delta : a,
//         callbackFunction:s
//       },
//       l[o].timeInterval = e(l[o])
//     }
//   }
//   function a (i,e,t) {
//     i.mftTitleMarquee[t]&&void 0 !== e[t]&&e[t].timeInterval > 0&&clearInterval(e[t].timeInterval)
//   }
//   var c = [],
//   s = {
//     init : function (e) {
//       var s = {
//         mftMissYou : !0,
//         mftMissYouTitle : "Hey! I miss you!",
//         mftMissYouFavicon : {
//           "apple-touch-icon-precomposed" : "",
//           icon : "",
//           "shortcut icon" : ""
//         },
//         mftTitleBlink : {
//           visible : !1,
//           hidden : !1
//         },
//         mftTitleBlinkInterval : {
//           visible : 1e3,
//           hidden : 1e3
//         },
//         mftTitleAltText : {
//           visible : "\ufeff",
//           hidden : "\ufeff"
//         },
//         mftFaviconBlink : {
//           visible : !1,
//           hidden : !1
//         },
//         mftFaviconBlinkInterval : {
//           visible : 1e3,
//           hidden : 1e3
//         },
//         mftFaviconAltIcon : {
//           visible : {
//             "apple-touch-icon-precomposed" : "",
//             icon : "",
//             "shortcut icon" : ""
//           },
//           hidden : {
//             "apple-touch-icon-precomposed" : "",
//             icon : "",
//             "shortcut icon" : ""
//           }
//         },
//         mftTitleMarquee : {
//           visible : !1,
//           hidden : !1
//         },
//         mftTitleMarqueeDir : {
//           visible : "left",
//           hidden : "left"
//         },
//         mftTitleMarqueeDelay : {
//           visible : 200,
//           hidden : 500
//         }
//       },
//       d = i.extend({},s,e),
//       f = i(document).prop("title"),
//       v = {
//         "apple-touch-icon-precomposed" : i('link[rel="apple-touch-icon-precomposed"]').attr("href"),
//         icon : i('link[rel="icon"]').attr("href"),
//         "shortcut icon" : i('link[rel="shortcut icon"]').attr("href")
//       },
//       m = {
//         visible : {},
//         hidden : {}
//       },
//       u = {
//         visible : {},
//         hidden : {}
//       },
//       h = {
//         visible : {},
//         hidden : {}
//       };
//       for (var p in d)
//       d.hasOwnProperty(p)&&"mftMissYou" != p&&"mftMissYouTitle" != p&&("string"==typeof d[p]||"number" == typeof d[p] ? d[p] = {visible:d[p], hidden:d[p]} : i.isArray(d[p])&&(d[p] = {visible:d[p][0], hidden:d[p][1]}));
//       return d.mftTitleMarquee.visible ? r(d,s,h.visible,"visible") : d.mftTitleBlink.visible&&t(d,s,m.visible,"visible"), l(d,s,u.visible,"visible"), i(document).on("visibilitychange", function () {
//         if (i(document).prop("hidden")) {
//           if (d.mftMissYou && ("" !== d.mftMissYouTitle ? i(document).prop("title", d.mftMissYouTitle) : i(document).prop("title", s.mftMissYouTitle),
//           Object.keys(d.mftMissYouFavicon).length > 0))
//           for(var e in d.mftMissYouFavicon)
//           d.mftMissYouFavicon.hasOwnProperty(e) && i('link[rel="'+e+'"]').attr("href",d.mftMissYouFavicon[e]);
//           n(d,m.visible,"visible"),
//           o(d,u.visible,"visible"),
//           a(d,h.visible,"visible"),
//           d.mftTitleMarquee.hidden ? r(d,s,h.hidden,"hidden") : d.mftTitleBlink.hidden && t(d,s,m.hidden,"hidden"),
//           l(d,s,u.hidden,"hidden")
//         } else {
//           if (i(document).prop("title",f),Object.keys(v).length > 0)
//           for(var c in v)
//           v.hasOwnProperty(c) && i('link[rel="'+c+'"]').attr("href",v);
//           n(d,m.hidden,"hidden"),
//           o(d,u.hidden,"hidden"),
//           a(d,h.hidden,"hidden"),
//           d.mftTitleMarquee.visible ? r(d,s,h.visible,"visible") : d.mftTitleBlink.visible && t(d,s,m.visible,"visible"),
//           l(d,s,u.visible,"visible")
//         }
//       }),
//       i(document).data("mfancytitle", {settings:d, origTitle:f, origFavicon:v, titleBlinkOptions:m, faviconBlinkOptions:u, titleMarqueeOptions:h}),
//       c = i(document).data("mfancytitle")
//     },
//     update : function (e) {
//       var t = i.extend ({},c.settings,e);
//       i.mFancyTitle("destroy"),
//       i.mFancyTitle("init",t)
//     },
//     destroy : function () {
//       n(c.settings, c.titleBlinkOptions.visible, "visible"),
//       o(c.settings, c.titleBlinkOptions.visible, "visible"),
//       a(c.settings, c.titleBlinkOptions.visible, "visible"),
//       n(c.settings, c.titleBlinkOptions.hidden, "hidden"),
//       o(c.settings, c.titleBlinkOptions.hidden, "hidden"),
//       a(c.settings, c.titleBlinkOptions.hidden, "hidden"),
//       i.removeData(c,"mfancytitle"),
//       this.unbind(),
//       this.element=null
//     }
//   };
//   i.mFancyTitle = function (e) {
//     return s[e] ? s[e].apply(i(document), Array.prototype.slice.call(arguments,1)) : "object" != typeof e && e ? void i.error("Method "+e+" does not exist on jQuery.mFancyTitle ") : s.init.apply(i(document),arguments)
//   }
// };

// Укорачивание слов в меню
let navItems = document.querySelectorAll('.main-nav__item');
function resizeNavMenu() {
  if (window.innerWidth >= 1024) {
    navItems[2].children[0].innerHTML = 'ППР';
    navItems[3].children[0].innerHTML = 'ПТО / СКК';
  } else {
    navItems[2].children[0].innerHTML = 'Проект производства работ';
    navItems[3].children[0].innerHTML = 'Аутсорсинг ПТО / СКК';
  }
}
resizeNavMenu();
window.addEventListener('resize', function(event){
  resizeNavMenu();
});

// Изменение иконки телефона
let headerPhoneLink = document.querySelectorAll('.bottom-header__phone-link');
let headerPhoneUse = document.querySelector('.bottom-header__phone-use');
headerPhoneLink.forEach((item, i) => {
  item.addEventListener('mouseover', function() {
    headerPhoneUse.setAttribute('xlink:href', 'img/sprite.svg#phone-ringing');
  });
  item.addEventListener('mouseout', function() {
    headerPhoneUse.setAttribute('xlink:href', 'img/sprite.svg#phone');
  });
});

// Изменение размера лого
let svgLogo = document.querySelector('.svg-logo');
function setViewboxSvgLogo() {
  if ((document.documentElement.clientWidth < 1200) && (document.documentElement.clientWidth >= 1024)) {
    svgLogo.setAttribute('viewBox', '0 0 200 180');
  } else {
    svgLogo.setAttribute('viewBox', '0 0 720 180');
  }
};
setViewboxSvgLogo();
window.addEventListener('resize', function(event){
  setViewboxSvgLogo();
});

// Переливание лого
let logoGradient = document.querySelector('#logo-gradient');
let gradientTimer;
svgLogo.addEventListener('mouseover', function() {
  gradientTimer = setInterval(function() {
    for (let i = 0; i < logoGradient.childNodes.length; i++) {
      if (logoGradient.childNodes[1].getAttribute('offset') == '100%') {
        let switchAttribute = logoGradient.childNodes[1].getAttribute('stop-color');
        logoGradient.lastChild.setAttribute('stop-color', switchAttribute);
        logoGradient.lastChild.setAttribute('offset', '-100%');
        logoGradient.prepend(logoGradient.lastChild);
      }
      let attribute = logoGradient.childNodes[i].getAttribute('offset');
      attribute.substring(0, attribute.length - 1);
      let numAttribute = parseInt(attribute) + 1;
      attribute = numAttribute + '%';
      logoGradient.childNodes[i].setAttribute('offset', attribute);
    };
  }, 20);
});
svgLogo.addEventListener('mouseout', function() {
  clearInterval(gradientTimer);
});

// Появление меню
let navToggle = document.querySelector('.main-nav__toggle');
let mainMenu = document.querySelector('.main-nav__main-menu');
navToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('main-nav__main-menu--showed')) {
    navToggle.classList.remove('main-nav__toggle--opened');
    mainMenu.classList.remove('main-nav__main-menu--showed');
    setTimeout(function() {mainMenu.classList.remove('main-nav__main-menu--opened');}, 350);
  } else {
    navToggle.classList.add('main-nav__toggle--opened');
    mainMenu.classList.add('main-nav__main-menu--opened');
    setTimeout(function() {mainMenu.classList.add('main-nav__main-menu--showed');}, 50);
  };
});
