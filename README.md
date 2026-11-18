# Yu FENG (丰雨) 的学术主页

站点发布在 [yfengup.github.io](https://yfengup.github.io/)。内容迁自 [原 Google Sites 主页](https://sites.google.com/view/yufengsteve/home)。

- [`index.html`](index.html) 包含个人简介、联系方式、代表研究、研究动态和访问地图。
- [`research/index.html`](research/index.html) 包含研究方向、项目和演示。
- [`publications/index.html`](publications/index.html) 按年份列出论文。
- [`activities/index.html`](activities/index.html) 记录报告、会议活动和学术服务。
- `assets/` 包含站点样式、图片和 MP4。替换媒体文件后需要同步检查研究页中的文件路径。

在仓库根目录运行 `python3 -m http.server 8000`，然后打开 [本地预览](http://localhost:8000/)。

GitHub Pages 从 `main` 分支根目录发布。编辑 HTML 后将改动提交到该分支即可触发部署。页面和媒体使用相对路径，也可将这些文件直接部署到其他静态托管服务。

首页底部嵌入原 Looker Studio 访问地图，滚动到附近时加载。`assets/analytics.js` 沿用旧 Google Sites 的 Google Analytics 数据流，仅在 `yfengup.github.io` 记录新站访问。
