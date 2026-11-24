// Author marks: * equal contribution, † corresponding author.
// "Kuangji Zuo" is bolded automatically wherever it appears.

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  /** Highlighted venue tag, e.g. for accepted papers. */
  badge?: string;
  tags: string[];
  image: string;
  /** Optional clip shown on hover: public/videos/<clip>.mp4 (poster <clip>.jpg). Only for papers with an official video. */
  clip?: string;
  links: { label: string; href: string }[];
};

export type Section = {
  title: string;
  /** Sections without thumbnails render as a compact list. */
  compact?: boolean;
  papers: Publication[];
};

export const sections: Section[] = [
  {
    title: "Robot Policy Learning",
    papers: [
      {
        title: "ODE Policy: Robot Learning via Action Dynamics, Not Actions",
        authors: [
          "Jindou Jia*", "Jingliang Li*", "Kuangji Zuo*", "Tuo An*", "Yuxuan Hu", "Mengfei Zhao",
          "Bofan Lyu", "Jiaqi Bai", "Daoyuan Zhu", "Hengyu Dai", "Junpeng Zhang", "Jianfei Yang†",
        ],
        venue: "arXiv preprint, 2026",
        tags: ["Neural ODE", "VLA", "WAM", "RL", "Humanoid"],
        image: "/images/ode-policy-teaser.jpg",
        clip: "ode-policy",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2611.01729" },
          { label: "Project", href: "https://ntumars.github.io/ODE/" },
          { label: "Code", href: "https://github.com/NTUMARS/ODE-POLICY" },
        ],
      },
      {
        title: "Δ Flow Matching for Robot Foundation Models",
        authors: [
          "Kuangji Zuo*", "Tuo An*", "Xinying Guo", "Gen Li", "Mengfei Zhao", "Jiaqi Bai",
          "Bofan Lyu", "Zhuoyuan Yu", "Jinghan Yang", "Jiayi Li", "Jindou Jia†", "Jianfei Yang†",
        ],
        venue: "arXiv preprint, 2026",
        tags: ["Flow Matching", "VLA", "WAM", "One-Step"],
        image: "/images/delta-flow-teaser.jpg",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2610.15794" },
          { label: "Project", href: "https://zuo-kuangji.github.io/delta-flow/" },
          { label: "Code", href: "https://github.com/NTUMARS/delta-flow-matching" },
        ],
      },
      {
        title: "AURA: Adaptive Uncertainty Enables Emergent Robot Behaviors Without Scaling",
        authors: [
          "Jindou Jia*", "Tuo An*", "Yuxuan Hu*", "Mengfei Zhao*", "Gen Li", "Kuangji Zuo",
          "Jiaqi Bai", "Bofan Lyu", "Jingliang Li", "Yilun Du", "Jianfei Yang†",
        ],
        venue: "Preprint, 2026",
        tags: ["Visuomotor Policy", "Uncertainty", "Multimodality"],
        image: "/images/aura-framework.jpg",
        clip: "aura",
        links: [
          { label: "Project", href: "https://ntumars.github.io/AURA/" },
          { label: "Code", href: "https://github.com/NTUMARS/AURA_Policy" },
        ],
      },
      {
        title: "Unified Condition-Action Modeling for Accurate One-Step Action Generation",
        authors: [
          "Xinyu Zhou*", "Zikun Cai*", "Kuangji Zuo", "Gen Li", "Boyu Ma", "Yanshuo Lu",
          "Yutong Song", "Mingqi Yuan", "Jiayu Chen†", "Jianfei Yang†",
        ],
        venue: "Conference on Robot Learning (CoRL), 2026",
        badge: "CoRL 2026",
        tags: ["Flow Matching", "Visuomotor Policy", "One-Step"],
        image: "/images/uca-flow-figure.jpg",
        clip: "uca-flow",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2608.16153" },
          { label: "Project", href: "https://uca-policy.github.io/UCA.github.io/" },
          { label: "Code", href: "https://github.com/Juggler8338/UCA" },
        ],
      },
      {
        title: "FLASH: Efficient Visuomotor Policy via Sparse Sampling",
        authors: [
          "Jiaqi Bai*", "Jindou Jia*", "Yuxuan Hu", "Gen Li", "Xiangyu Chen", "Tuo An",
          "Kuangji Zuo", "Jianfei Yang†",
        ],
        venue: "Conference on Neural Information Processing Systems (NeurIPS), 2026",
        badge: "NeurIPS 2026",
        tags: ["Visuomotor Policy", "Flow Matching", "One-Step"],
        image: "/images/flash-teaser.jpg",
        clip: "flash",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2605.15492" },
          { label: "Project", href: "https://b1ue-jay.github.io/FLASH/" },
          { label: "Code", href: "https://github.com/B1ue-Jay/FLASH" },
        ],
      },
    ],
  },
  {
    title: "Humanoid Locomotion",
    papers: [
      {
        title: "ADAPT: Analytical Disturbance-Aware Policy Training for Humanoid Locomotion",
        authors: [
          "Bofan Lyu*", "Jindou Jia*", "Kuangji Zuo", "Yanshuo Lu", "Shijia Han", "Gen Li",
          "Boyu Ma", "Jingliang Li", "Geng Li", "Jianfei Yang†",
        ],
        venue: "Conference on Robot Learning (CoRL), 2026",
        badge: "CoRL 2026",
        tags: ["Humanoid", "RL", "Disturbance Estimation"],
        image: "/images/adapt-overview.jpg",
        clip: "adapt",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2606.16542" },
          { label: "Project", href: "https://blyu413.github.io/adapt-locomotion/" },
          { label: "Code", href: "https://github.com/blyu413/ADAPT" },
        ],
      },
    ],
  },
  {
    title: "Human-Robot Interaction",
    papers: [
      {
        title:
          "Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation",
        authors: [
          "Kuangji Zuo*", "Gen Li*", "Bofan Lyu", "Yanshuo Lu", "Boyu Ma", "Shijia Han",
          "Xinyu Zhou", "Xichen Yuan", "Chuhao Zhou", "Jiaqi Bai", "Geng Li", "Jianfei Yang†",
        ],
        venue: "arXiv preprint, 2026",
        tags: ["VLA", "Gaze", "Humanoid"],
        image: "/images/gaze2act-poster.jpg",
        clip: "gaze2act",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2605.30282" },
          { label: "Project", href: "https://zuo-kuangji.github.io/Gaze2Act/" },
          { label: "Code", href: "https://github.com/zuo-kuangji/Gaze2Act" },
        ],
      },
      {
        title: "EM-Fall: Embodied mmWave Sensing for Day-and-Night Fall Detection on Humanoid Robots",
        authors: [
          "Yanshuo Lu", "Yuxuan Hu", "Shenghai Yuan", "Xinyu Zhou", "Kuangji Zuo", "Bofan Lyu",
          "XiChen Yuan", "Jianfei Yang†",
        ],
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026",
        badge: "IROS 2026",
        tags: ["mmWave", "Humanoid", "Fall Detection"],
        image: "/images/emfall-figure.jpg",
        clip: "em-fall",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2606.11109" },
          { label: "Project", href: "https://lu-yanshuo.github.io/EM-Fall-Webpage/" },
        ],
      },
    ],
  },
];
