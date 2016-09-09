import choo from "choo";
import html from "choo/html";
import Home from "./containers/Home/";
import Todos from "./containers/Todos/";
import About from "./containers/About";

const app = choo()

app.model({
  state: {
  	todos: [],
  },
  reducers: {
    set: (todo, state) => ({ todos: [...state.todos, todo] }),
    change: ({ data, index }, state) => state.todos[index] = {...state.todos[index], ...data},
  },
});

app.router((route) => [
  route('/', Home),
  route('/home', Home),
  route('/todo', Todos),
  route('/about', About),
])

if (module.parent) {
  module.exports = app;
} else {
  app.use({
    onStateChange: (data, state, prev, caller, createSend) => window.__state = state,
    wrapInitialState: (obj) => ({...obj, ...window.__state}),
  })
  app.start("#root")
}


if(module.hot) {
  module.hot.accept();
  app.start("#root");
}
