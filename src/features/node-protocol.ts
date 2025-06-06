import type { Plugin } from 'rolldown'

/**
 * The `node:` protocol was added in Node.js v14.18.0.
 * @see https://nodejs.org/api/esm.html#node-imports
 */
export function NodeProtocolPlugin(): Plugin {
  return {
    name: 'tsdown:node-protocol',
    resolveId(id) {
      if (id.startsWith('node:')) {
        return {
          id: id.slice(5),
          external: true,
          moduleSideEffects: false,
        }
      }
    },
  }
}
