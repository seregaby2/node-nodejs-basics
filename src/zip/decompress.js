import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { pipeline } from 'stream'
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'archive.gz');
const PathToWrite = path.join(__dirname, 'files', 'fileToCompress.txt');



export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const source = fs.createReadStream(PathFromRead)
    const destination = fs.createWriteStream(PathToWrite)

    pipeline(source, unzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
}
)}
decompress();