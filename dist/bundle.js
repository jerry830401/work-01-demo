!function(n){function a(a){for(var t,l,i=a[0],c=a[1],s=a[2],u=0,d=[];u<i.length;u++)l=i[u],e[l]&&d.push(e[l][0]),e[l]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(p&&p(a);d.length;)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var n,a=0;a<o.length;a++){for(var r=o[a],t=!0,i=1;i<r.length;i++){var c=r[i];0!==e[c]&&(t=!1)}t&&(o.splice(a--,1),n=l(l.s=r[0]))}return n}var t={},e={0:0},o=[];function l(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=t,l.d=function(n,a,r){l.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:r})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,a){if(1&a&&(n=l(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var t in n)l.d(r,t,function(a){return n[a]}.bind(null,t));return r},l.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(a,"a",a),a},l.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},l.p="../dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var s=0;s<i.length;s++)a(i[s]);var p=c;o.push([1,1]),r()}([,function(n,a,r){"use strict";r.r(a);var t=r(0),e=r.n(t);r(2),r(5);e()(document).ready(function(){e()("#header").append('\n        <nav class="navbar navbar-expand-sm navbar-light">\n            <a class="navbar-brand" href="index.html" id="logo">MCU</a>\n            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n                <span class="navbar-toggler-icon"></span>\n            </button>\n  \n            <div class="collapse navbar-collapse" id="navbarSupportedContent">\n                <ul class="navbar-nav mr-auto">\n                    <li class="nav-item active">\n                        <a class="nav-link" href="introduction.html">簡介</a>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="character.html">復仇者</a>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="#">電影</a>\n                    </li>\n                    <li class="nav-item">\n                        <a class="nav-link" href="#">電視劇</a>\n                    </li>\n                </ul>\n                <form class="form-inline my-2 my-lg-0">\n                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n                </form>\n            </div>\n        </nav>    \n    '),e()(".carousel").carousel({interval:5e3})})},,,,function(n,a,r){var t=r(6);"string"==typeof t&&(t=[[n.i,t,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};r(8)(t,e);t.locals&&(n.exports=t.locals)},function(n,a,r){(n.exports=r(7)(!1)).push([n.i,"body {\n  background-color: #400 !important; }\n\n.container {\n  background-color: #fff9e8;\n  height: 100vh; }\n\n#header nav {\n  width: 100%;\n  padding: 15px; }\n  #header nav #logo {\n    font-size: 36px; }\n\n#info {\n  margin: 20px 0px 0px 0px; }\n  #info .col-1-5 {\n    width: 20%; }\n  #info .col-1-5:last-of-type {\n    border-right: 0px; }\n\n#gallery .row .col-4 {\n  padding: 15px; }\n  #gallery .row .col-4 img {\n    width: 100%; }\n\n#introduction {\n  padding: 15px;\n  background-color: white; }\n  #introduction img {\n    margin-bottom: 15px; }\n\n#character {\n  padding: 15px;\n  background-color: #e4ccb2; }\n  #character div {\n    margin: 15px 0px 15px 0px; }\n",""])}]);