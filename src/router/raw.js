export default {
	notice: {
		title: "我须留意",
		path: "#Notice",
		children: [
			{
				title: "查看消息",
				path: "xsxxviewAction.do",
			},
			{
				title: "常用文件下载",
				path: "ileUploadDownloadAction.do?actionType=4",
			},
		],
	},
	course: {
		title: "选课管理",
		path: "#Course",
		children: [
			{
				title: "本学期课表",
				path: "xkAction.do?actionType=6",
			},
		],
	},
	personal: {
		title: "个人管理",
		path: "#Personal",
		children: [
			{
				title: "学籍信息",
				path: "xjInfoAction.do?oper=xjxx",
			},
		],
	},
	exam: {
		title: "考务管理",
		path: "#Exam",
		children: [],
	},
	resource: {
		title: "教学资源",
		path: "#Resource",
		children: [],
	},
	query: {
		title: "综合查询",
		path: "#Query",
		children: [],
	},
};
