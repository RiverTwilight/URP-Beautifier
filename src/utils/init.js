import fs from "fs";

const rawConfig = {
	name: "URP Beautifier",
	manifest_version: 3,
	version: "1.0",
	host_permissions: [],
	icons: {
		16: "./icon/android-icon-36x36.png",
		48: "./icon/android-icon-48x48.png",
		128: "./icon/icon-128.png",
	},
	permissions: [],
	content_scripts: [
		{
			matches: [],
			all_frames: true,
			js: ["content.bundle.cjs.js"],
			css: ["./css/global.css", "./css/bolt.css", "./css/main.css"],
		},
	],
	web_accessible_resources: [
		{
			matches: [],
			resources: [
				"/img/logo_landscape_dark.png",
				"/img/logo_landscape_light.png",
				"/img/undraw_no_data_re_kwbl.svg",
				"/img/sticker.webp",
				"/img/peek.webp",
				"/img/hide.webp",
				"/img/look.webp",
			],
		},
	],
};

const MATCHES = [
	"http://10-28-63-116-8081-p.webvpn.swpu.edu.cn/*",
	"http://jwxt.swpu.edu.cn/*",
	"http://10.28.63.111:9001/*",
	"http://10.28.63.111:9002/*",
	"http://10.28.63.111/*",
	"http://10.28.63.116:8081/*",
];

rawConfig["content_scripts"].forEach((script) => {
	script.matches = MATCHES;
});

rawConfig["web_accessible_resources"].forEach((script) => {
	script.matches = MATCHES;
});

rawConfig["host_permissions"] = MATCHES;

fs.writeFileSync("./dist/manifest.json", JSON.stringify(rawConfig));
