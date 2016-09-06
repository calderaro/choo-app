import choo from "choo";
import html from "choo/html";
import Home from "./containers/Home";
import Todo from "./containers/Todo";
import About from "./containers/About";
import store from "./store";

const app = choo()


app.model({
  state: {
  	todos: [],
  },
  reducers: {
  	setTodos: (todos, state) => ({ todos }),
    setTodo: (todo, state) => ({ todos: [...state.todos, todo] }),
    replaceTodo: ({ index, todo }, state) =>
    	({...state, todos: state.todos.map((t, i) => i === index ? todo : t )})
  },
  effects: {
    getTodos: (data, state, send, done) =>
    	store.getAll('todos', (todos) => send('setTodos', todos, done)),
    addTodo: (todo, state, send, done) =>
    	store.add('todos', todo, () => send('setTodo', {...todo, status: "incomplete"}, done)),
    changeTodo: (data, state, send, done) =>
      store.replace('todos', data, (res) => send('replaceTodo', res, done))
  }
})

app.router((route) => [
  route('/', Home),
  route('/home', Home),
  route('/todo', Todo),
  route('/about', About),
])

if (module.parent) module.exports = app;
else app.start("#root");