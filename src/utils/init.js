import fs from "fs";

const rawConfig = {
	name: "URP Beautifier",
	manifest_version: 3,
	version: "1.0",
	host_permissions: [],
	icons: {
		16: "./icon/icon.png",
		48: "./icon/icon.png",
		128: "./icon/icon.png",
	},
	permissions: ["activeTab", "contextMenus", "scripting"],
	background: {
		service_worker: "background.js",
	},
	action: {
		default_popup: "popup.html",
		default_title: "Download the score on this page.",
	},
	content_scripts: [
		{
			matches: [],
			all_frames: true,
			js: ["content.bundle.cjs.js"],
			css: ["./css/global.css", "./css/bolt.css", "./css/login.css"],
		},
	],
	web_accessible_resources: [
		{
			matches: [],
			resources: [
				"/img/logo_landscape_dark.png",
				"/img/logo_landscape_light.png",
			],
		},
	],
};

const MATCHES = [
	"http://10-28-63-116-8081-p.webvpn.swpu.edu.cn/*",
	"http://jwxt.swpu.edu.cn/*",
	"http://10.28.63.111:9001/*",
	"http://10.28.63.111:9002/*",
];

rawConfig["content_scripts"].forEach((script) => {
	script.matches = MATCHES;
});

rawConfig["web_accessible_resources"].forEach((script) => {
	script.matches = MATCHES;
});

rawConfig["host_permissions"] = MATCHES;

fs.writeFileSync("./dist/manifest.json", JSON.stringify(rawConfig));
