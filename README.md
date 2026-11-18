# Yu FENG (丰雨) 的学术主页

站点发布在 [yfengup.github.io](https://yfengup.github.io/)。内容迁自 [原 Google Sites 主页](https://sites.google.com/view/yufengsteve/home)。

- [`index.html`](index.html) 包含个人简介、联系方式和研究动态。
- [`research/index.html`](research/index.html) 包含研究方向、项目和演示。
- [`publications/index.html`](publications/index.html) 按年份列出论文。
- [`activities/index.html`](activities/index.html) 记录报告、会议活动和学术服务。
- `assets/` 包含站点样式、站内搜索脚本、图片和 MP4。替换媒体文件后需要同步检查研究页中的文件路径。

在仓库根目录运行 `python3 -m http.server 8000`，然后打开 [本地预览](http://localhost:8000/)。通过 HTTP 预览时，站内搜索会在首次查询时读取同站的其他页面。

GitHub Pages 从 `main` 分支根目录发布。编辑 HTML 后将改动提交到该分支即可触发部署。页面和媒体使用相对路径，也可将这些文件直接部署到其他静态托管服务。原访客地图仍通过首页底部的 Looker Studio 链接访问。
