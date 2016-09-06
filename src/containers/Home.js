import html from "choo/html";
import Root from "../components/Root";

const Home = (state, prev, send) => {
  const view = html`
    <div>
      Welcome to my Choo test
    </div>
  `;

  return Root(view);
}

export default Home;
