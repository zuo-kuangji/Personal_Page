import { llmsTxt } from "../lib/agents";

// Served at /llms.txt (https://llmstxt.org): a plain summary for AI agents.
export const GET = () => new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
