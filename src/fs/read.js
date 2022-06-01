import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
     fs.readFile(PathFromRead, {encoding: "utf-8"})
     .then((data) => console.log(data))
     .catch(() => {throw new Error('FS operation failed')})
};
read()