import { render, h, Component } from "preact";
import Frame from "../../components/frame";
import { personal as personalRoute } from "../../router/raw";

export default () => {
	return (
		<section>
			{personalRoute.children.map((route) => {
				return (
					<Frame title={route.title} url={route.path}></Frame>
				);
			})}
		</section>
	);
};
