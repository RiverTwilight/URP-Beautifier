import { render, h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import Frame from "./frame";

export default ({ childRoute }) => {
	const [tab, setTab] = useState(
		childRoute[0].path || "xjInfoAction.do?oper=xjxx"
	);

	const tabRoute = childRoute.find((route) => route.path == tab);

	return (
		<section>
			<div className="DIS(flex)">
				{childRoute.map((route) => {
					return (
						<div
							onClick={() => {
								setTab(route.path);
							}}
							className={`${
								tab == route.path ? "active" : ""
							} tab`}
						>
							{route.title}
						</div>
					);
				})}
			</div>
			<Frame url={tabRoute.path} title={tabRoute.title} />
		</section>
	);
};
