import { render, h, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import Page from "../utils/page";

class PanelPage extends Page {
	constructor() {
		super();
		this.url = "/login";
		this.title = "Login";
		this.initPage();
		this.injectNewPage();
	}

	initPage() {
		const originalBody = document.getElementsByTagName("frameset").item(0);
		const newBody = document.createElement("body");

		originalBody.parentNode.replaceChild(newBody, originalBody);

		this.originalPage = originalBody.innerHTML;
		originalBody.innerHTML = "";
	}

	injectNewPage() {
		const sidebarStyle = {
			backgroundColor: "#333",
			color: "#fff",
			height: "100vh",
			padding: "20px",
			width: "200px",
		};

		const contentStyle = {
			marginLeft: "200px",
			padding: "20px",
		};

		const menuItems = [
			{ label: "Dashboard", url: "#dashboard" },
			{ label: "Users", url: "#users" },
			{ label: "Settings", url: "#settings" },
		];

		const subMenuItems = [
			{ label: "Subtab 1", url: "#subtab1" },
			{ label: "Subtab 2", url: "#subtab2" },
			{ label: "Subtab 3", url: "#subtab3" },
		];

		render(
			<div className="DIS(flex)">
				<nav style={sidebarStyle} className="sidebar">
					<ul role="list">
						{menuItems.map((item) => (
							<li>
								<a href={item.url}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>
				<main style={contentStyle}>
					<nav className="DIS(flex)">
						<ul>
							{subMenuItems.map((item) => (
								<li>
									<a href={item.url}>{item.label}</a>
								</li>
							))}
						</ul>
					</nav>
					<section>
						<h1>Sub-level tab content goes here</h1>
					</section>
				</main>
			</div>,
			document.body
		);
	}
}

export default PanelPage;
