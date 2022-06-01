import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRename = (path.join(__dirname, 'files', 'wrongFilename.txt'));
const PathToRename = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
    fs.readFile(PathFromRename)
    .then(fs.rename(PathFromRename, PathToRename))
    .catch((err)=> {if(err) throw new Error ('FS operation failed')})
};
rename()