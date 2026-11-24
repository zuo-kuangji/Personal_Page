// Plain-text and Markdown views of the profile, for search engines and AI agents.
import { profile } from "../content/profile";
import { news } from "../content/news";
import { sections } from "../content/publications";
import { formatMonth } from "../i18n";

/** Markdown -> plain text (drops **bold** and [link](url) syntax). */
export const plain = (md: string) => md.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");

export const summary = `${profile.name} (${profile.chineseName}) is a graduate researcher at MARS Lab, Nanyang Technological University (NTU), Singapore, advised by ${profile.advisor.name}. Research: embodied AI for humanoid robots, including vision-language-action (VLA) models, world action models (WAM), robot action generation (ODE Policy, Δ Flow Matching, UCA-Flow), humanoid locomotion, and gaze-based human-robot interaction (Gaze2Act). Builds and tests policies on real hardware, mainly humanoids with dexterous hands, including whole-body teleoperation and real-robot deployment.`;

const authorLine = (authors: string[]) => authors.join(", ");
const papers = sections.flatMap((section) => section.papers.map((pub) => ({ ...pub, section: section.title })));

export function llmsTxt() {
  const lines = [
    `# ${profile.name} (${profile.chineseName})`,
    "",
    `> ${summary}`,
    "",
    ...profile.bio.flatMap((p) => [plain(p), ""]),
    `Hands-on: ${profile.handsOn.join("; ")}.`,
    "",
    "## Publications",
    "",
    ...papers.map((pub) => {
      const links = pub.links.map((l) => `${l.label}: ${l.href}`).join(" · ");
      return `- ${pub.title} — ${pub.venue}. Area: ${pub.section}. Tags: ${pub.tags.join(", ")}. ${links}`;
    }),
    "",
    "## Links",
    "",
    `- Homepage: ${profile.homepage}/`,
    `- Full profile in Markdown: ${profile.homepage}/index.md`,
    `- Chinese homepage (中文主页): ${profile.homepage}/zh/`,
    ...profile.links.map((l) => `- ${l.label}: ${l.href.replace("mailto:", "")}`),
    "",
  ];
  return lines.join("\n");
}

export function indexMd() {
  const lines = [
    `# ${profile.name} (${profile.chineseName})`,
    "",
    `${profile.role}, ${profile.affiliation}. Homepage: ${profile.homepage}/`,
    "",
    ...profile.bio.flatMap((p) => [p, ""]),
    "## Hands-on experience",
    "",
    ...profile.handsOn.map((s) => `- ${s}`),
    "",
    "## News",
    "",
    ...news.map((n) => `- **${formatMonth(n.month, "en")}**: ${n.text}${n.links ? " " + n.links.map((l) => `[${l.label}](${l.href})`).join(" ") : ""}`),
    "",
    "## Publications",
    "",
    "\\* Equal contribution, † corresponding author.",
    "",
    ...sections.flatMap((section) => [
      `### ${section.title}`,
      "",
      ...section.papers.flatMap((pub) => [
        `- **${pub.title}**  `,
        `  ${authorLine(pub.authors).replace(profile.name, `**${profile.name}**`)}  `,
        `  *${pub.venue}*. ${pub.links.map((l) => `[${l.label}](${l.href})`).join(" · ")}  `,
        `  Tags: ${pub.tags.join(", ")}`,
        "",
      ]),
    ]),
    "## Contact",
    "",
    ...profile.links.map((l) => `- [${l.label}](${l.href})`),
    "",
  ];
  return lines.join("\n");
}
