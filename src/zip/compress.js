import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { pipeline } from 'stream'
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathFromRead = path.join(__dirname, 'files', 'fileToCompress.txt');
const PathToWrite = path.join(__dirname, 'files', 'archive.gz');



export const compress = async () => {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(PathFromRead)
    const destination = fs.createWriteStream(PathToWrite)

    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
}
)}
compress();