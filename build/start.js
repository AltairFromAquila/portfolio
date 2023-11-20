import esbuild from 'esbuild';
import { getBuildSettings } from './shared.js';

const settings = getBuildSettings('dev', { 
  sourcemap: true,
  banner: {
    js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
  },
});
const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
  servedir: 'dist/dev',
  fallback: "dist/dev/index.html"
});

console.log(`\x1b[32mApp started at ${host}:${port}!\x1b[0m`);