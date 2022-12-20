var num = 0
function novoCliente() {
    var id = parseInt(window.prompt("Digite o id do cliente: ")),
    var nome = window.prompt("Digite o nome do cliente: "),
    var cpf = window.prompt("Digite o cpf do cliente: "),
    var endereco =  window.prompt("Digite o endereço do cliente: "),
    var email = window.prompt("Digite o email do cliente: "),
    var telefone =  window.prompt("Digite o telefone do cliente: ") 
}
clientes.push(novoCliente)
console.table(clientes)


do{
 
    var clientes = [
        {id: 1, nome: "Felipe", cpf: "123.456.789-11", endereco: "Soledade2", email:"felipe@email.com", telefone:"154848485"},
        {id: 2, nome: "Felix", cpf: "123.456.789-11", endereco: "Soledade3", email:"felix@email.com", telefone:"254561477"}
    ]    
    var menu = parseInt(window.prompt(`Escolha a opção desejada:
    1 - Cadastrar novo cliente;
    2 - Consultar um cliente pelo id;
    3 - Excluir um cliente pelo id;
    4 - Listar todos os clientes cadastrados
    5 - Sair do sistema
    `))

    switch(menu){
        case 1:{
            //Cadastrar um novo cliente
            novoCliente()
            
            break;
        }
        case 2:{
            //consultar um cliente pelo id
            var buscar = parseInt(window.prompt("Digite o id do cliente: "))
            if(clientes.find(i => i.id == buscar)){
                console.table(clientes.find(i => i.id == buscar))
            }else{
                console.log("ID informado não possui cadastro!")
            }
        };break;

        case 3: {
            //Excluir um cliente pelo id
            var id = parseInt(window.prompt("Digite o id do cliente que deseja excluir: ")) 
            if(clientes.find(i => i.id == id)){
                var index = clientes.findIndex(clientes => clientes.id == id)
                clientes.splice(index,1)
                console.table(clientes)
            }else{
                console.log("Id informado não possui cadastro!")
            }
            
        };break;

        case 4:{
            //listar todos os clientes
            console.table(clientes)
        };break;

        case 5: {
            //Sair do sistema
            num += 1

        };break

        default: console.log("Opção invalida!")

        
    }
}while(num == 0)