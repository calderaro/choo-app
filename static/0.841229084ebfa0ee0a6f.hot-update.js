webpackHotUpdate_name_(0,{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _templateObject = _taggedTemplateLiteral(["\n    <div onload=", ">\n      <form onsubmit=", ">\n        <input type=\"text\" placeholder=\"New item\" id=\"title\">\n      </form>\n      <ul>\n        ", "\n      </ul>\n    </div>"], ["\n    <div onload=", ">\n      <form onsubmit=", ">\n        <input type=\"text\" placeholder=\"New item\" id=\"title\">\n      </form>\n      <ul>\n        ", "\n      </ul>\n    </div>"]),
	    _templateObject2 = _taggedTemplateLiteral(["\n          <li>\n            <input\n            \tonchange=", "\n            \ttype=\"checkbox\" ", " />\n            ", "\n          </li>"], ["\n          <li>\n            <input\n            \tonchange=", "\n            \ttype=\"checkbox\" ", " />\n            ", "\n          </li>"]);

	var _choo = __webpack_require__(11);

	var _choo2 = _interopRequireDefault(_choo);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
	  replace: function replace(storeName, index, item, cb) {
	    store.getAll(storeName, function (items) {
	      items[index] = item;
	      window.localStorage[storeName] = JSON.stringify(items);
	      cb(item);
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
	    updateTodo: function updateTodo(_ref, state) {
	      var data = _ref.data;
	      var index = _ref.index;
	      return _extends({}, state, { todos: state.todos.map(function (t, i) {
	          return i === index ? _extends({}, t, data) : t;
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
	      store.replace('todos', data.index, newTodo, function (item) {
	        send('replaceTodo', { index: data.index, todo: newTodo }, done);
	      });
	    }
	  }
	});

	var view = function view(state, prev, send) {
	  return (0, _html2.default)(_templateObject, function () {
	    return send('getTodos');
	  }, onSubmit, state.todos.map(function (todo, index) {
	    return (0, _html2.default)(_templateObject2, function (e) {
	      return change(e, index);
	    }, todo.status === "completed" ? 'checked' : '', todo.title);
	  }));

	  function onSubmit(e) {
	    var input = e.target.children[0];
	    send('addTodo', { title: input.value });
	    input.value = '';
	    e.preventDefault();
	  }
	  function change(e, index) {
	    send('changeTodo', { data: { status: e.target.checked ? "completed" : "incomplete" }, index: index });
	  }
	};

	app.router(function (route) {
	  return [route('/', view)];
	});

	var tree = app.start();
	document.body.appendChild(tree);

/***/ }

})