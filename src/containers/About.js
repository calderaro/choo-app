import html from "choo/html";
import Root from "../components/Root";

const About = (state, prev, send) =>  Root(html`
  <div>
    Choo is very nice and simple
  </div>
`);


export default About;
