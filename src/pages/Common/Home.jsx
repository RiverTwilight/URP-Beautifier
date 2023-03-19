import { render, h, Component } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import Page from "../../utils/page";
import Router from "../../router/raw";
import Subpage from "../../components/subpage";
import getImage from "../../utils/getImage";

function MainView() {
	const [hash, setHash] = useState("#Notice");

	useEffect(() => {
		if (window.location.hash === "") {
			console.log("No hash");
			window.location.hash = hash;
		}
		window.addEventListener("hashchange", () => {
			setHash(window.location.hash);
		});
	}, []);

	const sidebarStyle = {
		backgroundColor: "var(--siderbar-bg)",
		color: "var(--c-themed)",
		height: "100vh",
		padding: "0",
		width: "200px",
		position: "relative",
	};

	const contentStyle = {
		padding: "0px 10px",
		width: "100%",
	};

	const currentRoute = useMemo(
		() => Object.values(Router).find((route) => route.path == hash),
		[hash]
	);

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
									hash == item.path ? "active" : ""
								}`}
							>
								<a href={item.path}>{item.title}</a>
							</li>
						))}
					</ul>
					<div className="DIS(flex) JC(center) signout">
						<button onClick={handleSignout}>注销</button>
					</div>
				</nav>
				<section style={contentStyle}>
					<div id="intereactive">
						<Subpage
							key={hash}
							childRoute={currentRoute.children}
						/>
					</div>
				</section>
			</main>
			<img
			id="peeker"
				src={getImage("/img/peek.webp")}
				alt="peeker"
				border="0"
			/>
		</div>
	);
}

class PanelPage extends Page {
	constructor() {
		super();
		this.url = "/login";
		this.title = "Login";
		this.username = "";
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
