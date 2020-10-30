const questions = [
    "how many licks does it take til you get to the center of the oh! ohhhhHH!",
    "how many drinks would take for you to leave with me",
    "who let the dogs out?"
]

const ask = (i=0) => {
process.stdout.write(`\n\n\n ${questions[i]}`)
process.stdout.write(` > `)
}

ask();

const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    
    if (answers.length<questions.length) {
       ask(answers.length) 
    } else {
        process.exit()
    }

})

process.on('exit', () => {
    const [licks, drinks, dogs] = answers
   console.log(`
   Thank you!
   Gimme ${licks}slurps and ${drinks}dranks ${dogs}!`)
})