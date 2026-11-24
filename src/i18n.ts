// Site languages and fixed UI text. Content (bio, news, papers) lives in src/content/*,
// where each Chinese field sits next to its English one (e.g. `text` / `textZh`).
export type Lang = "en" | "zh";

export const langs: Record<Lang, { path: string; htmlLang: string; switchLabel: string }> = {
  en: { path: "/", htmlLang: "en", switchLabel: "English" },
  zh: { path: "/zh/", htmlLang: "zh-CN", switchLabel: "中文" },
};

export const ui = {
  en: {
    title: "Kuangji Zuo (左匡济) | Humanoid Robots, Dexterous Hands, Embodied AI",
    description:
      "Kuangji Zuo (左匡济), graduate researcher at NTU MARS Lab. Embodied AI for humanoid robots and dexterous hands: VLA and world action models, robot action generation (ODE Policy, Δ-flow, UCA-Flow), humanoid locomotion, and gaze-based human-robot interaction (Gaze2Act).",
    subtitle: "Graduate Researcher · MARS Lab, NTU Singapore",
    about: "About Me",
    news: "News",
    publications: "Publications",
    scholarLink: "Full list on Google Scholar →",
    marks: "* Equal contribution  † Corresponding author",
    updated: "Last updated Nov 2026",
    linkLabels: { Paper: "Paper", Project: "Project", Code: "Code", paper: "paper", project: "project", code: "code" },
    handsOnLabel: "Hands-on experience",
    bannerAlt: "Illustration of Kuangji Zuo at a desk in a lab full of humanoid robots",
  },
  zh: {
    title: "左匡济 Kuangji Zuo | 人形机器人、灵巧手、具身智能",
    description:
      "左匡济（Kuangji Zuo），南洋理工大学 MARS Lab 研究生研究员。研究具身智能与人形机器人：视觉-语言-动作（VLA）模型、世界动作模型、机器人动作生成（ODE Policy、Δ-flow、UCA-Flow）、人形机器人运动控制，以及基于注视的人机交互（Gaze2Act）。",
    subtitle: "研究生研究员 · 新加坡南洋理工大学 MARS Lab",
    about: "关于我",
    news: "动态",
    publications: "论文",
    scholarLink: "完整列表见 Google Scholar →",
    marks: "* 共同第一作者  † 通讯作者",
    updated: "最后更新：2026 年 11 月",
    linkLabels: { Paper: "论文", Project: "项目主页", Code: "代码", paper: "论文", project: "项目主页", code: "代码" },
    handsOnLabel: "上手经验",
    bannerAlt: "插画：左匡济在满是人形机器人的实验室里",
  },
} as const;

/** "2026-11" -> "Nov 2026" (en) or "2026.11" (zh). */
export function formatMonth(month: string, lang: Lang) {
  const [year, m] = month.split("-").map(Number);
  if (lang === "zh") return `${year}.${String(m).padStart(2, "0")}`;
  return `${new Date(Date.UTC(year, m - 1, 1)).toLocaleString("en-US", { month: "short", timeZone: "UTC" })} ${year}`;
}

export const pick = <T,>(lang: Lang, en: T, zh?: T) => (lang === "zh" && zh !== undefined ? zh : en);
