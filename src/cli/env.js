export const parseEnv = () => {
    process.env.RSS_name = 'serg'
    const entries = Object.entries(process.env)
    const result =  entries.filter((e) => e[0].includes('RSS_'))
    result.forEach(e => console.log(`${e[0]} = ${e[1]}`))
};
parseEnv()