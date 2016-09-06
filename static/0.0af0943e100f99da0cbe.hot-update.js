webpackHotUpdate_name_(0,{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _templateObject = _taggedTemplateLiteral(['\n    <div>\n      <form onsubmit=', '>\n        <input type="text" placeholder="New item" id="title">\n      </form>\n      <ul>\n        ', '\n      </ul>\n    </div>'], ['\n    <div>\n      <form onsubmit=', '>\n        <input type="text" placeholder="New item" id="title">\n      </form>\n      <ul>\n        ', '\n      </ul>\n    </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['<li>', '</li>'], ['<li>', '</li>']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	//import choo from "choo";

	var choo = __webpack_require__(11);
	var html = __webpack_require__(10);
	var app = choo();

	app.model({
	  state: {
	    todos: [{ title: "learn choo" }, { title: "rule the world" }]
	  },
	  reducers: {
	    add: function add(data, state) {
	      return { todos: [].concat(_toConsumableArray(state.todos), [data]) };
	    }
	  }
	});

	function onSubmit(e) {
	  var input = e.target.children[0];
	  send('add', { title: input.value });
	  input.value = '';
	  e.preventDefault();
	}
	var view = function view(state, prev, send) {
	  return html(_templateObject, onSubmit, state.todos.map(function (todo) {
	    return html(_templateObject2, todo.title);
	  }));
	};

	app.router(function (route) {
	  return [route('/', view)];
	});

	var tree = app.start();
	document.body.appendChild(tree);

/***/ }

})