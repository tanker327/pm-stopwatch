(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PMStopwatch", [], factory);
	else if(typeof exports === 'object')
		exports["PMStopwatch"] = factory();
	else
		root["PMStopwatch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var startTime = Symbol('start_time');
	var stopTime = Symbol('stop_time');
	var status = Symbol('running_status');
	var history = Symbol('history');
	var setHistory = Symbol('set_history');
	
	var STATUS = {
	  UNSTARTED: Symbol('unstarted'),
	  RUNNING: Symbol('running'),
	  STOPPED: Symbol('stopped')
	};
	
	var Stopwatch = function () {
	  function Stopwatch() {
	    _classCallCheck(this, Stopwatch);
	
	    this[status] = STATUS.UNSTARTED;
	    this[history] = [];
	  }
	
	  _createClass(Stopwatch, [{
	    key: 'start',
	    value: function start(message) {
	      if (this.isStopped) {
	        throw new Error('Stopwatch must be reset before being restarted.');
	      }
	      if (this.isRunning) {
	        throw new Error('Stopwatch is running. You cannot start it again.');
	      }
	      var currentTime = this[startTime] = this[stopTime] = Date.now();
	      this[setHistory](message, currentTime);
	      this[status] = STATUS.RUNNING;
	    }
	  }, {
	    key: 'stop',
	    value: function stop(message) {
	      if (!this.isRunning) {
	        throw new Error('Stopwatch is not running. You cannot stop it.');
	      }
	      this[setHistory](message);
	      this[stopTime] = Date.now();
	      this[status] = STATUS.STOPPED;
	      return this[stopTime] - this[startTime];
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this[status] = STATUS.UNSTARTED;
	      this[history].length = 0; // fast way to clean array
	    }
	  }, {
	    key: 'lap',
	    value: function lap(message) {
	      if (!this.isRunning) {
	        throw new Error('Stopwatch is not running.');
	      }
	
	      return this[setHistory](message).lapTime;
	    }
	  }, {
	    key: setHistory,
	    value: function value(message) {
	      var currentTime = arguments.length <= 1 || arguments[1] === undefined ? Date.now() : arguments[1];
	
	      if (this.isStopped) {
	        throw new Error("The stopwatch is stopped. You can set history");
	      }
	
	      var lapInfo = {
	        message: message,
	        timestamp: currentTime,
	        lapTime: currentTime - this[stopTime]
	      };
	      this[stopTime] = currentTime;
	      this[history].push(lapInfo);
	      return lapInfo;
	    }
	  }, {
	    key: 'getLapHistory',
	    value: function getLapHistory() {
	      return this[history];
	    }
	  }, {
	    key: 'displayTime',
	    get: function get() {
	      if (this.isRunning) {
	        return Date.now() - this.startTime;
	      } else if (this.isStopped) {
	        return this.startTime - this.stopTime;
	      } else {
	        return 0;
	      }
	    }
	  }, {
	    key: 'startTime',
	    get: function get() {
	      if (this.isStarted) {
	        return this[startTime];
	      } else {
	        throw new Error('Stopwatch is not running.');
	      }
	    }
	  }, {
	    key: 'stopTime',
	    get: function get() {
	      if (this.isStopped) {
	        return this[stopTime];
	      } else {
	        throw new Error('Stopwatch is still running or never run.');
	      }
	    }
	  }, {
	    key: 'isStarted',
	    get: function get() {
	      return this[status] !== STATUS.UNSTARTED;
	    }
	  }, {
	    key: 'isStopped',
	    get: function get() {
	      return this[status] === STATUS.STOPPED;
	    }
	  }, {
	    key: 'isRunning',
	    get: function get() {
	      return this[status] === STATUS.RUNNING;
	    }
	  }]);
	
	  return Stopwatch;
	}();

	exports.default = Stopwatch;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pm-stopwatch.js.map