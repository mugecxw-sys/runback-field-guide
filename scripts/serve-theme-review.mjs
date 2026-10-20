import { startProdServer } from 'vinext/server/prod-server';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const port = Number(process.argv[2]);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('A valid local port is required');
await startProdServer({ port, host: '127.0.0.1', outDir: resolve(root, 'dist') });
