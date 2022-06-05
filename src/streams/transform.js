import { Transform, pipeline } from 'stream';

const readable = process.stdin;
const writable = process.stdout;

export const transform = async () => {
    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkString = chunk.toString().trim();

            const reversedChunk = chunkString.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            cb()
        }
    })

    pipeline(
        readable,
        transform,
        writable,
        err => {
            console.log(`Error: ${err}`)
        }
    )
};

transform()