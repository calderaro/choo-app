import h from "choo/html";
const style = module.parent ? {} : require("./style.css");

const Nav = (content) => h`
	<nav className=${style.nav}>
		<a href="home">Home</a>
		<a href="todo">Todos</a>
		<a href="about">About</a>
	</nav>
`;

export default Nav;
