import { render, h, Component } from "preact";

export default ({ url, title }) => {
	return (
		<div>
			<h1>{title}</h1>
			<iframe width="100%" height="100%" src={url}></iframe>
		</div>
	);
};
