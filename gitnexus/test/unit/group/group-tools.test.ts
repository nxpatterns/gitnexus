// gitnexus/test/unit/group/group-tools.test.ts
import { describe, it, expect } from 'vitest';
import { GITNEXUS_TOOLS } from '../../../src/mcp/tools.js';

const GROUP_TOOL_NAMES = [
  'group_list',
  'group_sync',
  'group_contracts',
  'group_query',
  'group_status',
];

describe('Group MCP tools', () => {
  it('all 5 group tools are registered', () => {
    for (const name of GROUP_TOOL_NAMES) {
      const tool = GITNEXUS_TOOLS.find((t) => t.name === name);
      expect(tool, `tool ${name} should be registered`).toBeDefined();
      expect(tool!.description.length).toBeGreaterThan(10);
      expect(tool!.inputSchema.type).toBe('object');
    }
  });

  it('group_sync requires name', () => {
    const tool = GITNEXUS_TOOLS.find((t) => t.name === 'group_sync')!;
    expect(tool.inputSchema.required).toContain('name');
  });
});
