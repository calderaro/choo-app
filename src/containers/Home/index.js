import html from "choo/html";
import Root from "../../components/Root";
const style = module.parent ? {} : require("./style.css");

const Home = (state, prev, send) => {
  const view = html`
    <div class=${style.container}>
      <h1>Welcome to my Choo test</h1>
      <p>edit something to test the hmr</p>
    </div>
  `;

  return Root(view);
}

export default Home;
