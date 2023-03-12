import LoginPage from "../pages/login.jsx";
import PanelPage from "../pages/panel.jsx";

(function main() {
	console.log("Copy right @RiverTwilight");

	disableStyle();

	if (isLogged()) {
		document.querySelectorAll(".Linetop").forEach((item) => {
			item.remove();
		});
		switch (window.location.pathname) {
			case "/loginAction.do":
				new PanelPage(window.location.pathname);
				break;
			case "/xkAction.do":
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

function isLogged() {
	return !document.title.includes("登录");
}
