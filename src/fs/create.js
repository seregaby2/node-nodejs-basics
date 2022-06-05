import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

export const create = async () => {
    
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { AbortSignal }, (err => {
        if(err) {
            console.log('FS operation failed', err);
            throw err
        }
            console.log('wrote file')
        
    }))
};
create()