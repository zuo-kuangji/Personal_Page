# kuangjizuo.com

左匡济的个人主页。Astro + Tailwind 静态网站，推送到 `main` 后由 GitHub Actions 自动构建并发布到 GitHub Pages（域名 kuangjizuo.com，DNS 在 Cloudflare）。

- 英文版：https://kuangjizuo.com/
- 中文版：https://kuangjizuo.com/zh/

两个版本由同一份数据生成，改一处，中英文页面一起更新。

## 平时要改什么，改哪里

| 想改的内容 | 文件 | 说明 |
| --- | --- | --- |
| 简介、上手经验标签、联系方式 | `src/content/profile.ts` | `bio` / `handsOn` 是英文，`bioZh` / `handsOnZh` 是中文。简介支持 `**加粗**` 和 `[链接](https://...)`。 |
| 动态（News） | `src/content/news.ts` | 每条写 `month`（如 `"2026-11"`）、英文 `text`、中文 `textZh`。最新的放最上面。 |
| 论文 | `src/content/publications.ts` | 按板块分组。每篇写标题、作者、会议、标签、封面图和链接；作者里的 `Kuangji Zuo` 会自动加粗。`*` 共同一作，`†` 通讯作者。 |
| 页面上的固定文字（标题、栏目名等） | `src/i18n.ts` | `en` 和 `zh` 各一份。 |
| 论文封面图 / 悬停视频 | `public/images/`、`public/videos/` | 视频只给有官方视频的论文加：`<名字>.mp4` 和同名的 `<名字>.jpg` 封面。 |

改完后底部的 “Last updated” 在 `src/i18n.ts` 里顺手改一下日期。

## 本地预览与发布

需要 Node 24（https://nodejs.org 下载 LTS 版本安装）。

```bash
npm ci          # 第一次或依赖变动后
npm run dev     # 本地预览，打开 http://localhost:4321
npm run build   # 检查能否正常构建
git add -A && git commit -m "Update homepage" && git push   # 推送后约 1 分钟自动上线
```

## 给搜索引擎和 AI agent 的部分

这些都从上面的数据自动生成，不需要单独维护：

- `/llms.txt`、`/index.md`：给 AI agent 读的纯文本 / Markdown 版本（`src/lib/agents.ts`）。
- 页面里的 schema.org 结构化数据、hreflang 中英文互链（`src/components/HomePage.astro`、`src/layouts/BaseLayout.astro`）。
- `public/robots.txt`：允许搜索引擎和 AI 爬虫抓取。
- `public/sitemap.xml`：新增页面时记得加进去。

已在 Google Search Console 和 Bing Webmaster Tools 验证。`src/layouts/BaseLayout.astro` 里的 `*-site-verification` 标签是验证用的，不要删。
