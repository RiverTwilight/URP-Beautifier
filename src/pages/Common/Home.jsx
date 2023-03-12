import { render, h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import Page from "../../utils/page";
import Router from "../../router/raw";
import Subpage from "../../components/subpage";

function MainView() {
	const [hash, setHash] = useState("#Notice");

	useEffect(() => {
		if (window.location.hash !== "") {
			setHash(window.location.hash);
		}
		window.addEventListener("hashchange", () => {
			setHash(window.location.hash);
		});
	}, []);

	const sidebarStyle = {
		backgroundColor: "#333",
		color: "#fff",
		height: "100vh",
		padding: "0",
		width: "200px",
		position: "relative",
	};

	const contentStyle = {
		padding: "0px 10px",
		width: "100%",
	};

	const currentRoute = Object.values(Router).find(
		(route) => route.path == hash
	);

	console.log(currentRoute)

	const handleSignout = () => {
		window.open("/");
	};

	return (
		<div className="DIS(flex) JC(center)">
			<main className="DIS(flex)">
				<nav style={sidebarStyle} className="sidebar">
					<ul role="list">
						{Object.values(Router).map((item) => (
							<li
								key={item.path}
								className={`${
									window.location.hash == item.path
										? "active"
										: ""
								}`}
							>
								<a href={item.path}>{item.title}</a>
							</li>
						))}
					</ul>
					<div className="DIS(flex) JC(center) signout">
						<button onClick={handleSignout}>退出登录</button>
					</div>
				</nav>
				<section style={contentStyle}>
					<section id="intereactive">
						<Subpage
							key={hash}
							childRoute={currentRoute.children}
						/>
					</section>
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
