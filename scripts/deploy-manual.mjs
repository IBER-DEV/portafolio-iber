import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const distPath = resolve(projectRoot, 'dist');
const docsPath = resolve(projectRoot, 'docs');

if (!existsSync(distPath)) {
  throw new Error('No se encontro la carpeta dist. Ejecuta npm run build primero.');
}

if (existsSync(docsPath)) {
  rmSync(docsPath, { recursive: true, force: true });
}

cpSync(distPath, docsPath, { recursive: true });
console.log('Deploy manual preparado: dist copiado en docs/.');
