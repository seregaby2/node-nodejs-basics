export const parseArgs = () => {
    const consoleArgv = process.argv.slice(2)
    for(let i = 0; i < consoleArgv.length - 1; i += 2) {
        console.log(`${consoleArgv[i].slice(2)} is ${consoleArgv[i+1]}`)
    }
};
parseArgs()