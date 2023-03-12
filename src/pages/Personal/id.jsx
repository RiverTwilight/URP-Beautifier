import { render, h, Component } from "preact";

export default ({ url }) => {
	return <iframe width="100%" height="100%" src={url}></iframe>;
};
