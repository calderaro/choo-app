import h from "choo/html";
import Nav from "./Nav";
const style = module.parent ? {} : require("./style.css");


const Root = (content) => h`
	<div id="root" class=${style.root}>
		${Nav()}
		${content}
	</div>
`;

const RootIso = (content) => h`
	<html>
		<head>
		</head>
		<body>
			${Root(content)}
			<script src="/static/app.js"></script>
		</body>
	</html>
`;

if (module.parent) module.exports = RootIso;
else module.exports = Root;
