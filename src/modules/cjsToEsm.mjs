import * as path from 'path'
import { release, version } from 'os';
import { createServer } from 'http'
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const testA = createRequire(path.join(__dirname, "./files/a.json"));
const testB = createRequire(path.join(__dirname, "./files/b.json"));

const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = testA;
} else {
    unknownObject = testB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

