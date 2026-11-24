import { indexMd } from "../lib/agents";

// Served at /index.md: the whole homepage as Markdown, for agents and LLM tools.
export const GET = () => new Response(indexMd(), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
