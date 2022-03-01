// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "/*\n* \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\n*/\n.skin{\n    background: #ffe600;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n */\n.nose{\n    border: 8px solid red;\n    border-color: black transparent transparent;\n    border-bottom: none;\n}\n.yuan{\n    position: absolute;\n    width: 16px;\n    height: 6px;\n    top: -14px;\n    left: -8px;\n    border-radius: 15px 15px 0 0;\n    background: black;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n */\n.eye{\n    border: 2px solid black;\n    width: 54px;\n    height: 54px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -27px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n/*\n * \u753B\u91CC\u9762\u7684\u773C\u73E0\u5B50\n */\n.eyeball{\n    border: 3px solid black;\n    width:26px;\n    height: 26px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 1px;\n}\n/*\n * \u5DE6\u773C\u5728\u5DE6\u8FB9\uFF0C\u53F3\u773C\u5728\u53F3\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n */\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n/*\n * \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u5634\n * \u5148\u753B\u4E0A\u5634\u5507\n */\n.mouth .up .lip{\n    border: 3px solid black;\n    height: 30px;\n    width: 82px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    position: absolute;\n    background: #ffe600;\n}\n.spot{\n    background: #ffe600;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    border-right-color: transparent;\n    transform: rotate(-30deg) translateX(-55px);\n    left:50%;\n    margin-left: -30px;\n}\n\n.mouth .up .lip.right{\n    border-radius: 0 0  50px 0;\n    border-left-color: transparent;\n    margin-left: 50px;\n    transform: rotate(30deg) translateX(55px);\n}\n/*\n * \u518D\u753B\u4E0B\u5634\u5507\n */\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 128px;\n    height: 600px;\n    position: absolute;\n    bottom: 29px;\n    left: 50%;\n    border-radius: 80px/300px;\n    margin-left: -64px;\n    background: #9b000a;\n    overflow: hidden;\n}\n/*\n * \u8FD8\u6709\u4E2A\u5C0F\u820C\u5934\n */\n.mouth .down .yuan1 .yuan2{\n    width: 160px;\n    height: 265px;\n    position: absolute;\n    bottom: -145px;\n    left:50%;\n    margin-left: -80px;\n    background: #ff485f;\n    border-radius: 150px/200px;\n}\n/*\n * \u7ED9\u76AE\u5361\u4E18\u753B\u4E0A\u816E\u7EA2\n */\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 65px;\n    height: 65px;\n    top: 180px;\n    margin-left: -35px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-140px);\n    background: red;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(140px);\n    background: red;\n    border-radius: 50%;\n}\n/*\n * \u8FD8\u6709\u76AE\u5361\u4E18\u7684\u95EA\u7535\n */\n.cover{\n    display:none ;\n}\n.face >img{\n    position: absolute;\n    top:50%;\n    left:50%;\n}\n@media (max-width: 500px) {\n    .face.left >img{\n        transform: rotateY(180deg) translateX(-53px);\n    }}\n/*\n * \u6700\u540E\uFF0C\u8BA9\u76AE\u5361\u4E18\u52A8\u4E00\u4E0B\u5427\n */\n.nose{\n    transform-origin: 50% 100%; \n    animation:  wave  infinite 0.8s linear;\n}\n.eyeball{\n    transform-origin: 50% 100%; \n    animation:  move  infinite 3s ;\n}\n";
exports.default = string;
},{}],"epB2":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 70,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnRePlay': 'replay'
    },
    n: 1,
    init: function init() {
        player.play();
        player.bindEvents();
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                //如果是自身属性，不是继承属性
                var value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 200;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 70;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    },
    replay: function replay() {
        player.pause();
        player.time = 70;
        player.play(player.n = 0);
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.c9dd140e.map