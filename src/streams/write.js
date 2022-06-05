import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';
const { stdin } = process;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
    stdin.on('data', (data) => {
        const stream = fs.createWriteStream(PathFromRead)
        stream.write(data)      
    })
    
};
write()