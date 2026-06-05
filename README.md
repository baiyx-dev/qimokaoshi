# 陕西非遗传播与互动平台

## 项目简介

本项目主题为“陕西非遗”，使用 HTML5、CSS3、JavaScript 开发“陕西非遗传播与互动平台”。网站包含非遗项目展示、传承人介绍、体验活动报名、文化资讯、联系反馈、关于平台和登录页面等内容。

## 目录结构

```text
qimokaoshi/
├── index.html              首页
├── projects.html           非遗项目
├── inheritors.html         非遗传承人
├── experience.html         非遗体验
├── news.html               文化资讯
├── contact.html            联系我们
├── about.html              关于平台
├── login.html              登录页
├── css/                    样式文件
│   ├── reset.css
│   ├── common.css
│   ├── index.css
│   ├── pages.css
│   └── responsive.css
├── js/                     交互脚本
│   ├── main.js
│   ├── carousel.js
│   ├── search.js
│   ├── form-validate.js
│   └── quiz.js
└── img/                    图片和视频资源
```

## 功能对应

- 首页包含 logo、固定顶部导航栏、响应式导航、首页轮播图和平台内容入口。
- 导航栏包含首页、非遗项目、非遗传承人、非遗体验、文化资讯、联系我们、关于平台、登录 8 个入口。
- `projects.html` 支持关键词搜索、分类筛选和名称/年份排序。
- `experience.html` 包含体验报名表单，使用文本框、手机号、下拉框、日期、单选、复选框、文本域等表单元素，并进行前端验证。
- `contact.html` 包含留言表单和邮箱验证。
- `experience.html` 包含非遗知识问答互动。
- `about.html` 包含非遗项目统计表格和资料来源。
- 多个页面使用 Flex/Grid 布局，支持桌面端和移动端响应式适配。

## 动效

页面动效参考中国非物质文化遗产网常见展示方式，采用淡入、上移、图片轻微缩放和轮播图缓慢缩放效果，代码为本项目重新编写。用户设置“减少动态效果”时，页面会自动降低动画影响。

## 资源来源

页面文字根据中国非物质文化遗产网、央视网、陕西省非物质文化遗产保护中心等公开资料整理。站内图片和视频存放在 `img/` 目录，文件名保留来源线索。

参考地址：

- 中国非物质文化遗产网：https://www.ihchina.cn
- 央视网：https://www.cctv.com

## 运行方式

本项目为静态网站，可直接双击 `index.html` 在浏览器中打开，也可以在项目根目录启动本地静态服务：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000/index.html
```
