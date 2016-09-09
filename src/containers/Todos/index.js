import html from "choo/html";
import Root from "../../components/Root";
const style = module.parent ? {} : require("./style.css");

const Todo = (state, prev, send) => {
  function onSubmit (e) {
    e.preventDefault();

    const input = e.target.children[0]
    send("set", { title: input.value })
    input.value = ""
  }
  function change(e, index) {
    send("change", { data: { status: e.target.checked ? "completed" : "incomplete" }, index })
  }

  const view = html`
    <div class=${style.container}>
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