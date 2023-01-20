import LoginPage from "../pages/login.jsx";
import PanelPage from "../pages/panel.jsx"

(function main() {
	console.log("Copy right @RiverTwilight");

	disableStyle();

	const currentPage = isLogged()
		? new PanelPage(window.location.pathname)
		: new LoginPage(window.location.pathname);
})();

function disableStyle() {
	document
		.querySelectorAll("link[href='/css/newcss/project.css']")
		.forEach((sheet) => (sheet.disabled = true));
}

function isLogged() {
	return !document.title.includes("登录")
}
