+++
title = "Hugo 博客搭建笔记"
date = 2026-05-28T20:30:00+08:00
description = "记录站点结构、主题模板和本地预览方式。"
tags = ["Hugo", "前端"]
categories = ["技术"]
+++

这个博客没有依赖外部主题，而是直接使用 Hugo 的布局模板来生成页面。

常用命令：

```powershell
hugo server -D
hugo
```

第一条用于本地预览，第二条用于生成静态文件。生成后的文件会出现在 `public` 目录里，可以部署到 GitHub Pages、Cloudflare Pages、Netlify 或自己的服务器。
