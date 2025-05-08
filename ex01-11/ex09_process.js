process.stdout.write('Está gostando da aula? ')
process.stdin.on('data', function (data) {
    process.stdout.write(`Sua resposta foi ${data.toString()}valeu!\n`)
    process.exit()
})
