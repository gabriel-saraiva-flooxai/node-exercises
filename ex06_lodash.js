const _ = require('lodash')

const alunos = [{
    nome: 'Jão',
    nota: 3.7
}, {
    nome: 'Mary',
    nota: 10
}, {
    nome: 'Pepedro',
    nota: 7.8
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
