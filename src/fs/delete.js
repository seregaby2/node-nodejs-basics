import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromDelete = (path.join(__dirname, 'files', 'fileToRemove.txt'));

export const remove = async () => {
    fs.unlink(PathFromDelete)
    .catch((err) => {throw new Error('FS operation failed')})
};
remove();