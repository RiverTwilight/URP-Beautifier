import { h, render } from 'preact';

(function main() {
	console.log("Copy right @RiverTwilight");

	new Page(window.location.pathname);
})();

class Page {
	constructor(url) {
		switch (url) {
			case "/":
				this.homePage();
				break;
		}
	}

	homePage() {
		const app = h("h1", null, "Hello World!");

		render(app, document.body);
	}

	_clickHandler(e) {
		console.log("click");
	}
}
