webpackHotUpdate_name_(0,{

/***/ 33:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var store = {
	  getAll: function getAll(storeName, cb) {
	    try {
	      cb(JSON.parse(window.localStorage[storeName]));
	    } catch (e) {
	      cb([]);
	    }
	  },
	  add: function add(storeName, item, cb) {
	    store.getAll(storeName, function (items) {
	      items.push(item);
	      window.localStorage[storeName] = JSON.stringify(items);
	      cb();
	    });
	  },
	  replace: function replace(storeName, _ref, cb) {
	    var data = _ref.data;
	    var index = _ref.index;

	    store.getAll(storeName, function (items) {
	      items[index] = _extends({}, items[index], data);
	      window.localStorage[storeName] = JSON.stringify(items);
	      cb({ index: index, todo: items[index] });
	    });
	  }
	};

	exports.default = store;

/***/ }

})