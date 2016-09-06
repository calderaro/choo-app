webpackHotUpdate_name_(0,{

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(["\n    <div onload=", ">\n      <form onsubmit=", ">\n        <input type=\"text\" placeholder=\"New item\" id=\"title\">\n      </form>\n      <ul>\n        ", "\n      </ul>\n    </div>\n  "], ["\n    <div onload=", ">\n      <form onsubmit=", ">\n        <input type=\"text\" placeholder=\"New item\" id=\"title\">\n      </form>\n      <ul>\n        ", "\n      </ul>\n    </div>\n  "]),
	    _templateObject2 = _taggedTemplateLiteral(["\n          <li>\n            <input\n            \tonchange=", "\n            \ttype=\"checkbox\" ", " />\n            ", "\n          </li>"], ["\n          <li>\n            <input\n            \tonchange=", "\n            \ttype=\"checkbox\" ", " />\n            ", "\n          </li>"]);

	var _html = __webpack_require__(10);

	var _html2 = _interopRequireDefault(_html);

	var _Root = __webpack_require__(36);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Todo = function Todo(state, prev, send) {
	  function onSubmit(e) {
	    var input = e.target.children[0];
	    send('addTodo', { title: input.value });
	    input.value = '';
	    e.preventDefault();
	  }
	  function change(e, index) {
	    send('changeTodo', { data: { status: e.target.checked ? "completed" : "incomplete" }, index: index });
	  }
	  var view = (0, _html2.default)(_templateObject, function () {
	    return send('getTodos');
	  }, onSubmit, state.todos.map(function (todo, index) {
	    return (0, _html2.default)(_templateObject2, function (e) {
	      return change(e, index);
	    }, todo.status === "completed" ? 'checked' : '', todo.title);
	  }));

	  return (0, _Root2.default)(view);
	};

	exports.default = Todo;

/***/ }

})