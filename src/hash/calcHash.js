import { createHash } from 'crypto';
import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    fs.readFile(PathFromRead, {encoding: 'utf-8'})
    .then(data => createHash('sha256').update(data).digest('hex'))
    .then(data => console.log(data))
};
calculateHash()