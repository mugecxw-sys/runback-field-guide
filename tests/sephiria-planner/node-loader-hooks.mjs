import { existsSync, readFileSync } from 'node:fs';
import ts from 'typescript';
import { dirname, resolve as resolvePath, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = resolvePath(dirname(fileURLToPath(import.meta.url)), '../..');
export async function resolve(specifier, context, nextResolve) {
  let target = specifier;
  if (specifier.startsWith('@/')) target = pathToFileURL(resolvePath(root, specifier.slice(2))).href;
  if ((target.startsWith('.') || target.startsWith('file:')) && !extname(target)) {
    const base = target.startsWith('file:') ? fileURLToPath(target) : resolvePath(dirname(fileURLToPath(context.parentURL)), target);
    for (const ext of ['.ts', '.tsx', '.mjs', '.js', '.json']) {
      if (existsSync(base + ext)) { target = pathToFileURL(base + ext).href; break; }
    }
  }
  if (target.endsWith('.json')) return nextResolve(target, { ...context, importAttributes: { ...context.importAttributes, type: 'json' } });
  return nextResolve(target, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.tsx')) {
    const source = readFileSync(fileURLToPath(url), 'utf8');
    return { format: 'module', shortCircuit: true, source: ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.ReactJSX } }).outputText };
  }
  if (url.endsWith('.json')) return nextLoad(url, { ...context, importAttributes: { ...context.importAttributes, type: 'json' } });
  return nextLoad(url, context);
}
