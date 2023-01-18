// chrome.runtime.onInstalled.addListener(() => {
// 	chrome.contextMenus.create({
// 		id: "sampleContextMenu",
// 		title: "Sample Context Menu",
// 		contexts: ["selection"],
// 	});
// });

// chrome.action.onClicked.addListener((tab) => {
// 	if (!tab.url.includes("chrome://")) {
// 		chrome.scripting.executeScript({
// 			target: { tabId: tab.id },
// 			function: getScoreLinks,
// 		});
// 	}
// });

// function getScoreLinks() {
// 	const scoreEles = document.getElementById("jmuse-scroller-component");
// 	console.log(scoreEles);
// }
