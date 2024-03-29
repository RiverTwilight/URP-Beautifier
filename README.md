# URP 教务系统美化插件

本插件重新设计了[URP 教务系统](http://cwjf.swpu.edu.cn/)的页面，更加符合现代审美。已知使用该教务系统的学校有：

-   西南石油大学

![screenshot](./screenshots/poster/1.png)
![screenshot](./screenshots/poster/2.png)

## 使用方法 Usage

### 1. 一键安装（推荐）

使用 Chrome 或者 Edge 点击链接访问 [chrome 插件商店](https://chrome.google.com/webstore/detail/urp-beautifier/iplofmnlmkbebfbihplgjkalkbbpiapm?hl=en-US) 安装即可。

### 2. 使用油猴安装

下载打包好的[油猴脚本](/tampermonkey/bundle.js)，导入油猴即可。由于图片使用外部链接，可能加载速度稍慢。

### 3. 使用 Chrome 手动安装

如果无法打开页面，请参考以下步骤：

1. 下载 [release](https://github.com/RiverTwilight/URP-Beautifier/releases) 中的 zip 文件，解压缩。
2. 打开 Chrome 浏览器，地址栏输入 [chrome://extensions](chrome://extensions)，回车。
3. 在打开的页面中，打开右上角的 「开发者模式」 选项。
4. 点击页面上方三个按钮中第一个，加载未打包的扩展程序。
5. 选择之前解压的文件夹，完成。

### 4. 使用 Edge 手动安装

1. 下载 [release](https://github.com/RiverTwilight/URP-Beautifier/releases) 中的 zip 文件，解压缩。
2. 打开 Edge 浏览器，地址栏输入 [edge://extensions](edge://extensions)，回车。
3. 在打开的页面中，打开左侧的 「开发人员模式」 选项。
4. 点击页面上方的 「加载解压缩的扩展」。
5. 选择解压的文件夹，完成。

此处以 Chrome 和 Edge 为例，同时支持 Firefox 浏览器。

## 贡献

```bash
npm run dev
# Or
yarn run dev # 仅支持 yarn 1
```

如果你需要添加更多适配网站，请更新两个文件：

-   [/src/index.tampermonkey.js](/src/index.tampermonkey.js) 中的头部 meta 标签
-   [/src/utils/init.js](/src/utils/init.js) 中的 MATCH 变量

### 使用 Chrome 调试

将 dist 文件夹加入插件列表即可。

插件的工作原理是注入一个脚本到页面上。

隐藏原有页面 -> 注入通用美化 CSS -> Preact 创建新页面 -> 使用 iframe 导航

## About

License: MIT
