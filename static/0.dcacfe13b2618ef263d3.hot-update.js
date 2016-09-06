webpackHotUpdate_name_(0,{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _templateObject = _taggedTemplateLiteral(['\n    <div>\n      <form onsubmit=', '>\n        <input type="text" placeholder="New item" id="title">\n      </form>\n      <ul>\n        ', '\n      </ul>\n    </div>'], ['\n    <div>\n      <form onsubmit=', '>\n        <input type="text" placeholder="New item" id="title">\n      </form>\n      <ul>\n        ', '\n      </ul>\n    </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['\n          <li>\n            <input type="checkbox" ', ' />\n            ', '\n          </li>'], ['\n          <li>\n            <input type="checkbox" ', ' />\n            ', '\n          </li>']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	//import choo from "choo";

	var choo = __webpack_require__(11);
	var html = __webpack_require__(10);
	var app = choo();

	app.model({
	  state: {
	    todos: [{ title: "learn choo", status: "completed" }, { title: "rule the world", status: "incomplete" }]
	  },
	  reducers: {
	    add: function add(data, state) {
	      return { todos: [].concat(_toConsumableArray(state.todos), [_extends({}, data, { status: "incomplete" })]) };
	    },
	    changeStatus: function changeStatus(_ref, state) {
	      var status = _ref.status;
	      var index = _ref.index;
	      return state.map(function (todo) {
	        return todo.id === index ? _extends({}, todo, { status: status }) : todo;
	      });
	    }
	  }
	});

	var view = function view(state, prev, send) {
	  return html(_templateObject, onSubmit, state.todos.map(function (todo) {
	    return html(_templateObject2, todo.status === "completed" ? 'checked' : '', todo.title);
	  }));

	  function onSubmit(e) {
	    var input = e.target.children[0];
	    send('add', { title: input.value });
	    input.value = '';
	    e.preventDefault();
	  }
	};

	app.router(function (route) {
	  return [route('/', view)];
	});

	var tree = app.start();
	document.body.appendChild(tree);

/***/ }

})