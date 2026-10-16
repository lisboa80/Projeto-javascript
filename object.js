
/*
pode criar objeto dentro de outros objetos
    address: {
          Rua: "Avenida Cupece",
         Numero: 4733,
         Apatamento: 20,
         Estado: "SP",
         Cidade: "São Paulo"
    }

    case queira pegar uma infomação especifica do objeto,
     pode fazer assim:
    console.log(Cristiano.address.Rua)

    Resuldado: Avenida Cupece

    Obs: com const nao pode mudar  objetos interios mas
     pode mudar os valores especificos do objeto inserindo codigo

     cristiano.address.Rua = "Rua Guilherme Guile"
     console.log(Cristiano.address.Rua)


 */
const Cristiano = {
    name: "Cristiano",
    age: 46,
    address: {
        Rua: "Avenida Cupece",
        Numero: 4733,
        Apatamento: 20,
        Estado: "SP",
        Cidade: "São Paulo"

    }
}


console.log(Cristiano)





