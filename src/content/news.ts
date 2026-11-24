// Newest first. `month` is "YYYY-MM"; it is shown as "Nov 2026" / "2026.11".
// Write each item in English (`text`) and Chinese (`textZh`).
export type NewsItem = {
  month: string;
  text: string;
  textZh: string;
  links?: { label: "paper" | "project" | "code"; href: string }[];
};

export const news: NewsItem[] = [
  {
    month: "2026-11",
    text: "Released ODE Policy: robot learning via action dynamics, not actions.",
    textZh: "发布 ODE Policy：让机器人学习动作的动力学，而不是动作本身。",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2611.01729" },
      { label: "project", href: "https://ntumars.github.io/ODE/" },
    ],
  },
  {
    month: "2026-10",
    text: "Released Δ Flow Matching for Robot Foundation Models.",
    textZh: "发布 Δ Flow Matching：从近期历史出发的机器人基础模型流匹配。",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2610.15794" },
      { label: "project", href: "https://zuo-kuangji.github.io/delta-flow/" },
    ],
  },
  {
    month: "2026-05",
    text: "Released Gaze2Act: gaze-conditioned VLA policies for interactive robot manipulation.",
    textZh: "发布 Gaze2Act：以人眼注视为条件的 VLA 策略，用于交互式机器人操作。",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2605.30282" },
      { label: "project", href: "https://zuo-kuangji.github.io/Gaze2Act/" },
    ],
  },
];
