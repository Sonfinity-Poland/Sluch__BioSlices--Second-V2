!function(n){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var n,t=0;t<s.length;t++){for(var e=s[t],r=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={2:0},s=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([12,0]),e()}({1:function(n,t){n.exports="img/Arthroflex_mockup_gauss_970.png"},12:function(n,t,e){"use strict";e.r(t);var r=e(0),o=(e(13),e(7)),s=new(e.n(o).a);r(document).ready(function(){s.start({countdown:!0,startValues:{seconds:180}}),r("#countdownExample .values").html(s.getTimeValues().toString()),s.addEventListener("secondsUpdated",function(n){r("#countdownExample .values").html(s.getTimeValues().toString())}),s.addEventListener("targetAchieved",function(n){r(".values").addClass("flashing")})})},13:function(n,t,e){n.exports='<!DOCTYPE html>\n<html lang="pl">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>PROMOCJA</title>\n    <link\n      rel="stylesheet"\n      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"\n      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"\n      crossorigin="anonymous"\n    />\n  </head>\n  <body>\n    <div class="container" style="background-color: #DFE2E5; overflow: hidden;">\n      <div class="row justify-content-center">\n        <div class="col-12 col-lg-8 p-5 bg-light">\n          <h1 class="text-center">Jeszcze lepsza okacja!</h1>\n          <h2 class="text-center" style="color: #000;">Przez najbliższe:</h2>\n          <div class="row">\n            <div class="col-12">\n              <div id="countdownExample">\n                <div class="values"></div>\n              </div>\n            </div>\n          </div>\n          <p class="text-center">\n            Arthroflex <br />\n            o 2x wyższym stężeniu składników aktywnych\n          </p>\n          <img\n            class="img-fluid w-50 d-block mx-auto"\n            src="'+e(1)+'"\n            alt="product box"\n          />\n\n          <br />\n          <br />\n          <h4 class="text-center">\n            <b><s>317zł</s> 141zł</b>\n          </h4>\n          <p class="text-center">\n            Zamów <u>dzisiaj</u> i oszczędź 276 zł, otrzymaj darmową wysyłkę i\n            gwarancję satysfakcji. Jutro promocja przepada.\n          </p>\n          <div class="row justify-content-center">\n            <a href="./shipping-form.html">\n              <button class="btn btn-success px-5 py-3 my-4">\n                DODAJ DO KOSZYKA\n              </button>\n            </a>\n          </div>\n          <div class="row justify-content-center">\n            <img class="my-3" src="'+e(14)+'" alt="" />\n          </div>\n          <div class="footer" style="font-size: 16px; text-align: center;">\n            <br />\n            <a href="#">Polityka Prywatności</a> | <a href="#">Regulamin</a> |\n            <a href="#">Kontakt</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n'},14:function(n,t){n.exports="img/pl_satisfaction.png"}});