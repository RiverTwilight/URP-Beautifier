class Page {
	url;
	originalPage;
	constructor(url) {
        this.hideOriginalPage();
		switch (url) {
			case "/":
				this.homePage();
				break;
		}
	}

	hideOriginalPage() {
		const container = document.createElement("div");
		container.innerHTML = document.body.innerHTML;
        this.originalPage = container;

        container.remove();
		document.body.innerHTML = ""; 
	}
}

export default Page;
