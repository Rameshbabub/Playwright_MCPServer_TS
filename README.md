# Playwright MCP Test Automation

This repository demonstrates using **Playwright** with **MCP (Model Context Protocol)** to execute E2E tests through a client-server architecture.

With this setup, you can trigger tests dynamically via an MCP client, and the MCP server will execute the corresponding Playwright tests.

---

## Folder Structure

```
playwright-mcp-ups/
│
├─ e2e/                     # Playwright test specs
│  ├─ tests/
│  │  ├─ homePageNavigation.spec.ts
│  │  └─ login.spec.ts
│  └─ utils/
│     └─ testRunner.ts      # Function to run tests by name
│
├─ mcp/
│  ├─ mcp-server.ts         # MCP server
│  └─ Client.ts             # MCP client
│
├─ package.json
└─ tsconfig.json
```

---

## Prerequisites

- Node.js >= 18
- npm
- Playwright installed (`npm install -D @playwright/test`)
- MCP SDK (`npm install @modelcontextprotocol/sdk`)

---

## Installation

```bash
# Clone repo
git clone <your-repo-url>
cd playwright-mcp-ups

# Install dependencies
npm install
```

---

## Running MCP Server

The MCP server registers a tool called `runTest` that allows executing Playwright tests by name.

```bash
# Start the MCP server
npx ts-node mcp/mcp-server.ts
```

You should see:

```
MCP server is now running...
```

---

## Running Tests via MCP Client

The MCP client connects to the server and triggers tests dynamically.

Example: Run `homePageNavigation` test.

```bash
npx ts-node mcp/Client.ts
```

Output:

```
🔗 Connecting to MCP server...
✅ Client connected to MCP server...
📢 Tool result: {
  content: [
    {
      type: 'text',
      text: '✅ Tests executed.\nOutput:\n[1/1] e2e/tests/homePageNavigation.spec.ts: Passed'
    }
  ]
}
❌ Client disconnected.
```

> The `testName` argument in `Client.ts` must match the test title in the Playwright spec file.

---

## testRunner.ts

The `testRunner.ts` maps test names to Playwright spec executions. Example:

```ts
export async function runTests(testName: string) {
  switch (testName) {
    case "homePageNavigation":
      return await homePageNavigation();
    case "loginTest":
      return await loginTest();
    default:
      return `Test '${testName}' not found`;
  }
}
```

---

## Running Playwright Reports

After tests run, you can view the HTML report:

```bash
npx playwright show-report
```

---

## Notes

- MCP server-client architecture allows decoupling test execution and control.
- You can dynamically trigger different tests without changing the server.
- Ensure `testName` passed from the client exactly matches Playwright test title.

---

## License

MIT © Your Name

