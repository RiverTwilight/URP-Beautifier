class Page {
	url;
	originalPage;
	constructor(url) {
		this.url = url;
		this.hideOriginalPage();
		print(url)
		switch(url){

		}
	}

	hideOriginalPage() {
		const container = document.createElement("div");

		container.innerHTML = document.body.innerHTML;
		console.log(container);
		this.originalPage = container;

		container.remove();
		document.body.innerHTML = "";
	}
}

export default Page;
