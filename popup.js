async function startDownload() {
	const [tab] = await chrome.tabs.query({
		active: true,
	});
	console.log(tab.id);
	const response = await chrome.tabs.sendMessage(tab.id, {
		greeting: "hello",
	});
	console.log(response);
}

document.getElementById("start-btn").addEventListener("click", startDownload);
