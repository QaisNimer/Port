import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'salma-portfolio-angular', 'browser');
const indexPath = join(outputDir, 'index.html');
const notFoundPath = join(outputDir, '404.html');

if (!existsSync(indexPath)) {
  throw new Error(`Build output was not found at ${indexPath}`);
}

copyFileSync(indexPath, notFoundPath);
