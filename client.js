import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
  // Spawn the MCP server as a child process
  const transport = new StdioClientTransport({
    command: "node",
    args: ["./mcp-server.js"], // adjust path if needed
  });

  // Initialize client
  const client = new Client({
    name: "playwright-mcp-client",
    version: "1.0.0",
  });

  // Connect client to the spawned server
  await client.connect(transport);

  // Call a tool exposed by the server
  const result = await client.callTool("runTest", {
    arguments: { testName: "homePageNavigation" },
  });

  console.log("Tool result:", result);

  await client.disconnect();
}

main().catch(console.error);
