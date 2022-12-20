do{
    let pergunta = parseFloat(window.prompt(`
    1 - Cadastrar um novo cliente
    2 - Consultar um cliente específico 
    3 - excluir um cliente específico
    4 - listar todos os clientes`));
    
    let cliente = [
        {
            Nome: "Luiz",
            Cpf: 18534754675,
            Endereco: "Rua Lucio Mendonça",
            Email: "felipe@gmail.com",
            Telefone: 98754425,
    
        },
        {
            Nome: "Arthur",
            Cpf: 185345645645,
            Endereco: "Rua tal",
            Email: "arthur@gmail.com",
            Telefone: 987213425,
        },
    ]
    console.log(cliente)
    
    switch (pergunta) {
        case 1:
            let cadastro = {
                Nome: window.prompt("Digite o Nome do cliente."),
                Cpf: window.prompt("Digite o CPF do cliente."),
                Endereco: window.prompt("Digite o endereço do cliente."),
                Email: window.prompt("Digite o E-mail do cliente."),
                Telefone: window.prompt("Digite o numero de telefone do cliente."),
                
            }
    
            cliente.push(cadastro)
            
            alert("Cliente foi cadastrado com sucesso!");
            console.log(cliente);break;
            
            case 2: let cons = window.prompt("Digite o nome do usuario que deseja encontrar.")
            if(cliente.find(i => i.Nome === cons)){
                console.log(cliente.find(i => i.id == cons));
            }else {
                alert("Usuario não cadastrado!")
            };break;
            
            case 3: let excCliente = window.prompt("Digite o nome do usuário que deseja excluir")
            let deleteUsuario = cliente.indexOf(excCliente);
            cliente.splice(deleteUsuario, 1)
            console.log (cliente);
    
            case 4:
                console.log(cliente);
        }
    
        var sair = window.prompt(`Deseja continuar?
        1 - sim
        2 - não
        `);
    }while(sair == "sim")