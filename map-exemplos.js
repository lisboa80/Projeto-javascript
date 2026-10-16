
// Exemplo de como mapear um array de objetos e criar um novo array com base
//  em uma condição, sem alterar o array original. No caso, estamos verificando
//  se o usuário é VIP e atribuindo uma cor de pulseira correspondente.

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: true }

]

const newList = list.map(user => {
    newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
})

// Exemplo de como mapear um array de objetos e criar um novo array com
//  base em uma condição, sem alterar o array original. No caso, estamos 
// verificando se a nota do aluno é maior ou igual a 5 e atribuindo o status
//  correspondente.

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 }
];

const studentList = students.map(student => {
    const status = student.testGrade >= 5 ? 'Aprovado' : 'Reprovado';
    return {
        name: student.name,
        testGrade: student.testGrade,
        status: status
    };
});

console.log(studentList);




