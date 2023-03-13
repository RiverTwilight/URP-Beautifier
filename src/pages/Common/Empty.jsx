import { render, h, Component } from "preact";
import Page from "../../utils/page";

function MainView() {
	return (
		<div style={{ height: "100%" }} className="DIS(flex) JC(center)">
			<div className="empty-notice">
				<img
					width={200}
					src={chrome.runtime.getURL(
						"/img/undraw_no_data_re_kwbl.svg"
					)}
				/>
				<h3 className="Texta(center)">暂时没有内容</h3>
			</div>
		</div>
	);
}

class PanelPage extends Page {
	constructor(emptyMessage) {
		super();
		this.emptyMessage = emptyMessage;
		this.url = "/login";
		this.title = "Login";
		this.initPage();
		this.injectNewPage();
	}

	initPage() {
		const originalBody = document.body;
		const newBody = document.createElement("body");

		originalBody.parentNode.replaceChild(newBody, originalBody);

		this.originalPage = originalBody.innerHTML;
		originalBody.innerHTML = "";
	}

	injectNewPage() {
		render(<MainView />, document.body);
	}
}

export default PanelPage;
