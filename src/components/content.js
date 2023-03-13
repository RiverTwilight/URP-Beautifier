import LoginPage from "../pages/Common/Login.jsx";
import EmptyPage from "../pages/Common/Empty";
import PanelPage from "../pages/Common/Home.jsx";

(function main() {
	console.log("Copy right @RiverTwilight");

	disableStyle();

	if (isLogged()) {
		removeScatters([
			".Linetop",
			"#tblHead",
			"img[src='/img/icon/alert.gif']",
		]);
		const errorMessage = document.querySelectorAll("table.error");
		const emptyMessage = Array.from(document.querySelectorAll("font[color='red']"))
		console.log(emptyMessage)
		if (
			errorMessage.length > 0 ||
			(emptyMessage.length > 0 &&
				emptyMessage.some((message) =>
					message.innerText.includes("暂时没公告")
				))
		) {
			errorMessage.forEach((item) => {
				item.remove();
			});
			emptyMessage.forEach((item) => {
				item.remove();
			});
			new EmptyPage();
		}

		switch (window.location.pathname) {
			case "/loginAction.do":
				new PanelPage(window.location.pathname);
				break;
			case "/xsxxviewAction.do":
				const message = document.querySelectorAll("#user tbody tr");
				if (message.length === 0) {
					document.querySelector("#user").remove();
				}
				new EmptyPage();
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
	document
		.querySelectorAll("link[href='/css/newcss/login.css']")
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
