import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';
const { stdout } = process;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    let data = ''
    const readData = fs.createReadStream(PathFromRead, 'utf-8')
    readData.on('data', chunk => data += chunk);
    readData.on('end', ()=> stdout.write(data))
    readData.on('error', e => console.log(e))
};
read()