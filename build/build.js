import * as esbuild from 'esbuild';
import { getBuildSettings } from './shared.js';

const settings = getBuildSettings('prod', { minify: true });

await esbuild.build(settings);
