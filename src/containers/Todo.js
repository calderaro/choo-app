import html from "choo/html";
import Root from "../components/Root";

const Todo = (state, prev, send) => {
  function onSubmit (e) {
    const input = e.target.children[0]
    send('addTodo', { title: input.value })
    input.value = ''
    e.preventDefault()
  }
  function change(e, index) {
    send('changeTodo', { data: { status: e.target.checked ? "completed" : "incomplete" }, index })
  }
  const view = html`
    <div onload=${() => send('getTodos')}>
      <form onsubmit=${onSubmit}>
        <input type="text" placeholder="New item" id="title">
      </form>
      <ul>
        ${state.todos.map((todo, index) => html`
          <li>
            <input
              type="checkbox"
            	onchange=${(e) => change(e, index)}
            	${todo.status === "completed" ? 'checked' : ''} />
            ${todo.title}
          </li>`)}
      </ul>
    </div>
  `;

  return Root(view);


}

export default Todo;