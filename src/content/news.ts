// Newest first. Plain text plus optional links shown after it.
export const news: { date: string; text: string; links?: { label: string; href: string }[] }[] = [
  {
    date: "Nov 2026",
    text: "Released ODE Policy: robot learning via action dynamics, not actions.",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2611.01729" },
      { label: "project", href: "https://ntumars.github.io/ODE/" },
    ],
  },
  {
    date: "Oct 2026",
    text: "Released Δ Flow Matching for Robot Foundation Models.",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2610.15794" },
      { label: "project", href: "https://zuo-kuangji.github.io/delta-flow/" },
    ],
  },
  {
    date: "May 2026",
    text: "Released Gaze2Act: gaze-conditioned VLA policies for interactive robot manipulation.",
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2605.30282" },
      { label: "project", href: "https://zuo-kuangji.github.io/Gaze2Act/" },
    ],
  },
];
