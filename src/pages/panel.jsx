import { render, h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import Page from "../utils/page";
import Course from "./Subpage/Course.jsx";
import Home from "./Subpage/Home.jsx";

const HashRouter = [
	{
		hash: "#Course",
		component: Course,
	},
	{
		hash: "#Query",
		component: () => <div>asdfa</div>,
	},
	{
		hash: "#Personal",
		component: () => <div>个人管理</div>,
	},
	{
		hash: "#Home",
		component: Home,
	},
];

function MainView() {
	const [hash, setHash] = useState("#Home");

	window.location.hash = hash;

	useEffect(() => {
		window.addEventListener("hashchange", () => {
			setHash(window.location.hash);
		});
	});

	const sidebarStyle = {
		backgroundColor: "#333",
		color: "#fff",
		height: "100vh",
		padding: "20px 0",
		width: "200px",
	};

	const contentStyle = {
		padding: "0px 10px",
		width: "100%",
	};

	const menuItems = [
		{ label: "我须留意", url: "#Home", children: [] },
		{ label: "选课管理", url: "#Course" },
		{ label: "教学评估", url: "#Review" },
		{ label: "考务管理", url: "#Examination" },
		{ label: "综合查询", url: "#Query" },
	];

	const Comp = HashRouter.find(
		(route) => route.hash == window.location.hash
	).component;

	return (
		<div className="DIS(flex)">
			<nav style={sidebarStyle} className="sidebar">
				<ul role="list">
					{menuItems.map((item) => (
						<li
							className={`${
								window.location.hash == item.url ? "active" : ""
							}`}
						>
							<a href={item.url}>{item.label}</a>
						</li>
					))}
				</ul>
				<button>退出登录</button>
			</nav>
			<main style={contentStyle}>
				{/* <nav className="DIS(flex)">
					{subMenuItems.map((item) => (
						<a href={item.url}>{item.label}</a>
					))}
				</nav> */}
				<section id="intereactive">
					<Comp key={hash} />
				</section>
			</main>
		</div>
	);
}

class PanelPage extends Page {
	constructor() {
		super();
		this.url = "/login";
		this.title = "Login";
		this.initPage();
		this.injectNewPage();
	}

	initPage() {
		const originalBody = document.body;
		const newBody = document.createElement("body");

		originalBody.parentNode.replaceChild(newBody, originalBody);

		this.originalPage = originalBody.innerHTML;
		originalBody.innerHTML = "";
	}

	injectNewPage() {
		render(<MainView />, document.body);
	}
}

export default PanelPage;
