webpackHotUpdate_name_(0,{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _choo = __webpack_require__(11);

	var _choo2 = _interopRequireDefault(_choo);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	var _Home = __webpack_require__(38);

	var _Home2 = _interopRequireDefault(_Home);

	var _Todo = __webpack_require__(34);

	var _Todo2 = _interopRequireDefault(_Todo);

	var _About = __webpack_require__(37);

	var _About2 = _interopRequireDefault(_About);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var app = (0, _choo2.default)();

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

	app.model({
	  state: {
	    todos: []
	  },
	  reducers: {
	    setTodos: function setTodos(todos, state) {
	      return { todos: todos };
	    },
	    setTodo: function setTodo(todo, state) {
	      return { todos: [].concat(_toConsumableArray(state.todos), [todo]) };
	    },
	    replaceTodo: function replaceTodo(_ref2, state) {
	      var index = _ref2.index;
	      var todo = _ref2.todo;
	      return _extends({}, state, { todos: state.todos.map(function (t, i) {
	          return i === index ? todo : t;
	        }) });
	    }
	  },
	  effects: {
	    getTodos: function getTodos(data, state, send, done) {
	      return store.getAll('todos', function (todos) {
	        return send('setTodos', todos, done);
	      });
	    },
	    addTodo: function addTodo(todo, state, send, done) {
	      return store.add('todos', todo, function () {
	        return send('setTodo', _extends({}, todo, { status: "incomplete" }), done);
	      });
	    },
	    changeTodo: function changeTodo(data, state, send, done) {
	      return store.replace('todos', data, function (res) {
	        return send('replaceTodo', res, done);
	      });
	    }
	  }
	});

	app.router(function (route) {
	  return [route('/', _Home2.default), route('/home', _Home2.default), route('/todo', _Todo2.default), route('/about', _About2.default)];
	});

	var tree = app.start();
	document.body.appendChild(tree);

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _templateObject = _taggedTemplateLiteral(["\n\t<div>\n\t\t<a href=\"home\">Home</a>\n\t\t<a href=\"todo\">Todos</a>\n\t\t<a href=\"about\">About</a>\n\t</div>\n"], ["\n\t<div>\n\t\t<a href=\"home\">Home</a>\n\t\t<a href=\"todo\">Todos</a>\n\t\t<a href=\"about\">About</a>\n\t</div>\n"]);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Nav = function Nav(content) {
		return (0, _html2.default)(_templateObject);
	};

	exports.default = Nav;

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(["\n  <div>\n    Choo is very nice and simple\n  </div>\n"], ["\n  <div>\n    Choo is very nice and simple\n  </div>\n"]);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	var _Root = __webpack_require__(36);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var About = function About(state, prev, send) {
	  return (0, _Root2.default)((0, _html2.default)(_templateObject));
	};

	exports.default = About;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(["\n    <div>\n      Welcome to my Choo test\n    </div>\n  "], ["\n    <div>\n      Welcome to my Choo test\n    </div>\n  "]);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	var _Root = __webpack_require__(36);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Home = function Home(state, prev, send) {
	  var view = (0, _html2.default)(_templateObject);

	  return (0, _Root2.default)(view);
	};

	exports.default = Home;

/***/ }

})