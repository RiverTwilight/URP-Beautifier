import LoginPage from "../pages/login.jsx";

(function main() {
	console.log("Copy right @RiverTwilight");

	disableStyle()

	const currentPage = new LoginPage(window.location.pathname);

})();

function disableStyle(){
	document.querySelectorAll("link[href='/css/newcss/project.css']").forEach(sheet => sheet.disabled = true)
}
