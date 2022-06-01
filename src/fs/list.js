import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files');

export const list = async () => {
   fs.readdir(PathFromRead)
   .then((data) => data.forEach(e => console.log(e)))
   .catch(() => {throw new Error('FS operation failed')})
};
list()