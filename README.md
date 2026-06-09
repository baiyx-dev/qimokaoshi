# 陕西非遗传播与互动平台

一个以陕西非物质文化遗产为主题的静态网站，使用 HTML5、CSS3 和原生 JavaScript 完成。网站围绕“看项目、识传承人、做体验、读资讯”组织内容，强调图片质感、沉浸式背景、响应式适配和轻量交互。

线上地址：[https://qimokaoshi.onrender.com](https://qimokaoshi.onrender.com)

## 项目亮点

- 完整静态网站结构，包含首页、非遗项目、非遗传承人、体验活动、文化资讯、联系反馈、关于平台和登录页。
- 非遗项目页收录 18 项陕西非遗，支持关键词搜索、分类筛选、地域筛选、名称/年份排序和详情弹窗。
- 传承人页整理真实非遗传承人资料，并配套人物图片、项目信息和代表性介绍。
- 体验页包含报名表单、前端校验、非遗知识问答和互动体验入口。
- 页面使用大图背景、玻璃质感、响应式布局和降低动画开销的滚动策略，兼顾观感和流畅度。
- 已配置 Render 静态部署，提交到 GitHub 后可自动更新线上站点。

## 页面说明

| 文件 | 页面 | 主要内容 |
| --- | --- | --- |
| `index.html` | 首页 | 主题入口、非遗概览、重点项目、沉浸式展示 |
| `projects.html` | 非遗项目 | 18 项非遗卡片、筛选排序、收藏清单、详情弹窗 |
| `inheritors.html` | 非遗传承人 | 传承人资料、图片、项目类别和地域信息 |
| `experience.html` | 非遗体验 | 活动报名、表单验证、知识问答 |
| `news.html` | 文化资讯 | 非遗相关资讯与活动信息 |
| `contact.html` | 联系我们 | 留言表单和联系方式 |
| `about.html` | 关于平台 | 平台介绍、统计表格、资料来源 |
| `login.html` | 登录页 | 简单登录界面展示 |

## 目录结构

```text
qimokaoshi/
├── index.html
├── projects.html
├── inheritors.html
├── experience.html
├── news.html
├── contact.html
├── about.html
├── login.html
├── render.yaml
├── css/
│   ├── reset.css
│   ├── common.css
│   ├── index.css
│   ├── pages.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── carousel.js
│   ├── search.js
│   ├── inheritors.js
│   ├── scroll-video.js
│   ├── form-validate.js
│   └── quiz.js
└── img/
    ├── banner-*.png
    ├── logo.svg
    ├── materials/
    └── video/
```

## 技术实现

- 布局：Flex、Grid、媒体查询和移动端断点适配。
- 交互：原生 JavaScript 实现轮播、筛选、排序、收藏、弹窗、表单验证和问答。
- 视觉：统一色彩变量、背景图融合、半透明层次、卡片阴影和图片遮罩。
- 性能：减少重型滚动特效，避免固定大背景造成的滚动卡顿，并为静态资源添加版本号。
- 部署：通过 `render.yaml` 配置 Render Static Site，并设置静态资源缓存策略。

## 运行方式

项目为静态网站，可以直接打开 `index.html`，也可以在项目根目录启动本地服务：

```bash
python3 -m http.server 8010
```

访问：

```text
http://localhost:8010/index.html
```

## 部署方式

项目已连接 GitHub 仓库和 Render。常规更新流程：

```bash
git add .
git commit -m "更新说明"
git push
```

推送到 `main` 分支后，Render 会自动重新部署。线上页面如遇缓存，可在 URL 后添加查询参数刷新，例如：

```text
https://qimokaoshi.onrender.com/projects.html?v=latest
```

## 资源来源

页面文字和项目资料参考中国非物质文化遗产网、央视网、新华网、陕西省非遗数字博物馆等公开资料整理。图片、视频素材统一放在 `img/` 目录，详细来源记录在：

```text
img/materials/hd/sources.md
```

主要参考站点：

- 中国非物质文化遗产网：[https://www.ihchina.cn](https://www.ihchina.cn)
- 央视网：[https://www.cctv.com](https://www.cctv.com)
- 新华网：[https://www.news.cn](https://www.news.cn)

## 最近更新

- 新增约 10 项陕西非遗项目，项目页总数扩展到 18 项。
- 补充曲艺、传统技艺、民俗等分类筛选，以及西安、榆林、铜川等地域筛选。
- 更新非遗项目详情弹窗内容，补充历史渊源、技艺流程、代表传承、保护价值和来源链接。
- 优化页面滚动流畅度，降低大图背景和滚动视频造成的性能压力。
- 修复 Render 线上 CSS/静态资源缓存问题。
- 清理根目录旧图片、系统文件和本地验证截图，保持项目目录整洁。
