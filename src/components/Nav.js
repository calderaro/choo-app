import h from "choo/html";

const Nav = (content) => h`
	<div>
		<a href="home">Home</a>
		<a href="todo">Todos</a>
		<a href="about">About</a>
		<input />
	</div>
`;

export default Nav;
