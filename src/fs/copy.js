import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromCopy = (path.join(__dirname, 'files'));
const PathToCopy = path.join(__dirname, 'files_copy');

export const copy = async () => {
    fs.readdir(PathFromCopy, { withFileTypes: true })
    .then(fs.mkdir('files_copy'))
    .then(() => fs.readdir(PathFromCopy, { withFileTypes: true }))
    .then((data) => {data.forEach(e => fs.copyFile(`${PathFromCopy}/${e.name}`, `${PathToCopy}/${e.name}`))})
    .catch((err) => {if(err)throw new error ('FS operation failed')})
};
copy()