import * as esbuild from 'esbuild';
import { getBuildSettings } from './shared.js';

try {
    const settings = getBuildSettings('prod', { minify: true });
    const result = await esbuild.build(settings);
    
    console.log(result);
    console.log('\x1b[32mBuild done!\x1b[0m');
} catch (err) {
    console.error(err);
}

process.exit();
