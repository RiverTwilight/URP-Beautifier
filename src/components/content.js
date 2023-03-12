import LoginPage from "../pages/login.jsx";
import PanelPage from "../pages/panel.jsx";

(function main() {
	console.log("Copy right @RiverTwilight");

	disableStyle();

	if (isLogged()) {
		removeScatters([".Linetop", "#tblHead"]);
		switch (window.location.pathname) {
			case "/loginAction.do":
				new PanelPage(window.location.pathname);
				break;
			default:
				console.log("No page matched");
		}
	} else {
		new LoginPage(window.location.pathname);
	}
})();

function disableStyle() {
	document
		.querySelectorAll("link[href='/css/newcss/project.css']")
		.forEach((sheet) => (sheet.disabled = true));
}

function removeScatters(selectors) {
	selectors.forEach((selector) => {
		document.querySelectorAll(selector).forEach((item) => {
			item.remove();
		});
	});
}

function isLogged() {
	return !document.title.includes("登录");
}
