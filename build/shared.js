import esbuildPluginTsc from 'esbuild-plugin-tsc';
import { copy } from 'esbuild-plugin-copy';

export function getBuildSettings(buildTypeFolder, options) {
  return {
    entryPoints: [ 'src/index.tsx' ],
    outfile: `dist/${buildTypeFolder}/index.js`,
    bundle: true,
    plugins: [
      esbuildPluginTsc({
        force: true
      }),
      copy({
        assets: {
          from: [ './src/index.html' ],
          to: [ './index.html' ],
          watch: true
        }
      })
    ],
    ...options
  };
}