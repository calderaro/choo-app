import html from "choo/html";
import Root from "../components/Root";
const style = module.parent ? {} : require("./style.css");

const About = (state, prev, send) =>  Root(html`
  <div class=${style.container}>
    <h1>${"<3 "}Choo sturdy frontend framework</h1>
    <ul>
    	<li>
    		<a href="https://github.com/yoshuawuyts/choo" target="_blank">Choo repo</a>
    	</li>
    	<li>
    		<a href="https://github.com/calderaro/chootest" target="_blank">this repo</a>
    	</li>
    </ul>
  </div>
`);


export default About;
