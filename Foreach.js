
/*

ForEach(item,index,array)

*/



const users = [
    { name: 'Rodolfo', age: 33, Contact: '(19)9445-5454' },
    { name: 'Paulo', age: 21, Contact: '(19)8400-2525' },
    { name: 'Aline', age: 40, Contact: '(16)9445-7469' },
    { name: 'Maria', age: 12, Contact: '(16)9185-5648' },
]


// deixando mais profissional

users.forEach(function (item, index) {
    console.log(`${index + 1}) nome:${item.name}, idade: ${item.age}, Contato: ${item.Contact}`)

});