import child_process from 'child_process';
import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PathChild = path.join(__dirname, 'files', 'script.js');

export const spawnChildProcess = async (args) => {
    const child = child_process.fork(PathChild, args )
    child.on('data', (data)=> {
        process.stdin.write(data)
    })

};

spawnChildProcess([4,2,3])