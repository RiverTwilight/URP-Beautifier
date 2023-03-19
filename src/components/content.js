import LoginPage from "../pages/Common/Login.jsx";
import EmptyPage from "../pages/Common/Empty";
import PanelPage from "../pages/Common/Home.jsx";

function main() {
	disableStyle();

	if (isLogged()) {
		removeScatters([
			".Linetop",
			"#tblHead",
			"img[src='/img/icon/alert.gif']",
		]);

		switch (window.location.pathname) {
			case "/loginAction.do":
				new PanelPage(window.location.pathname);
				break;
			case "/xsxxviewAction.do":
				const message = document.querySelectorAll("#user tbody tr");
				if (message.length === 0) {
					document.querySelector("#user").remove();
				}
				formatStyle();
				new EmptyPage();
				break;
			case "/lnkbcxAction.do":
				formatButton();
				break;
			case "/jskbcxAction.do":
				formatButton();
				break;
			case "/lskbcxAction.do":
				formatButton();
				break;
			case "/kckbcxAction.do":
				formatButton();
				break;
			default:
				formatStyle();
				console.log("No page matched");
		}
	} else {
		new LoginPage(window.location.pathname);
	}
}

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

function formatStyle() {
	const errorMessage = document.querySelectorAll("table.error");
	const emptyMessage = Array.from(
		document.querySelectorAll("font[color='red']")
	);
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

	const narrowTable = document.getElementById("user");
	const wideTable = document.getElementsByClassName("titleTop2");

	if (narrowTable) {
		narrowTable.style.width = "95vw";
	}

	if (wideTable) {
		Array.from(wideTable).forEach((table) => {
			table.style.margin = "0 auto";
		});
	}
}

function formatButton() {
	const oldButtons = Array.from(document.querySelectorAll("#btnSearch"));

	if (oldButtons.length > 0) {
		console.info("Old button detected!");
		oldButtons.forEach((parent) => {
			let newButton = document.createElement("button");
			newButton.onclick = parent.onclick;
			newButton.innerText = "查询";
			parent.after(newButton);
			parent.remove();
		});
	}
}

export default main
