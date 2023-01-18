const preact = require("preact");

(function main() {
	console.log("Copy right @RiverTwilight");

	const currentPage = new Page(window.location.pathname);
})();

class Page {
	constructor(url) {
		switch(url){
			case "":
				break;
		}
	}

	_clickHandler(e) {
		console.log("click");
	}
}
