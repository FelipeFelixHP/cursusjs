 // Menu principal com 4 opções
    //- Cadastrar um novo cliente (nome, cpf, endereco, email e telefone)
   // - Consultar um cliente especifico
   // - Excluir um cliente especifico
   // - Listar todos os clientes

    //Estrutura de repetição
    do{

        var vetores = Number(prompt(`Escolha a opção desejada :  
        1 - Cadastrar um novo cliente;
        2 - Consultar um cliente especifico;
        3 - Excluir um cliente especifico
        4 - Listar todos os clientes;
        `))
        
            switch(vetores){
                case 1: {
                //Função: cadastrar(txtNomecliente, txtcpfcliente, txtendereço, txttelefone)
                   // var Idnome = prompt('Digite seu nome:')
                   // var Idcpf = Number(prompt('Digite seu CPF: '))
                   // var Idendereço = prompt('Digite seu endereço:')
                  //  var Idtelefone = prompt('Digite seu telefone:')
    
                    
                    function cadastrar(txtNomecliente, txtcpfcliente, txtendereço, txttelefone){
                    let Idnomes = document.getElementById(txtNomecliente).value;
                    let Idcpfs = document.getElementById(txtcpfcliente).value;
                    let Idendereços = document.getElementById(txtendereço).value;
                    let Idtelefones = document.getElementById(txttelefone).value;
                    if (Idnomes == "")
                            alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
                        else if (Idcpfs == "")
                            alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
                            if (Idendereços == "")
                            alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
                            else if (Idtelefones == "")
                            alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
                        else cadastrarClientes(Idnomes, Number(Idcpfs), Idendereços, Number(Idtelefones));
                        }
    
                    function cadastrarClientes(Idnomes, Idcpfs, Idendereços, Idtelefones){
                        let novoCliente = {nome: Idnomes, cpf: Idcpfs, Endereço:Idendereços, Telefone: Idtelefones};
    
                        if (typeof(Storage) !== "undefined") {
                            let clientes = localStorage.getItem("clientes");
                            if (clientes == null) clientes = []; // Nenhum produto ainda foi cadastrado
                            else clientes = JSON.parse(clientes);
                            clientes.push(novoCliente); // Adiciona um novo produto
                            localStorage.setItem("clientes",JSON.stringify(clientes))
                            alert("Foram cadastradas com sucesso !");
                            atualizarTotalClientes("totalclientes");
                            location.reload();
                            } 
                            else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
    }
                    }
                    function atualizarTotalClientes(idCampo) {
                    localStorage.setItem("totalCliente",++document.getElementById(idCampo).innerHTML)
                        }
                    function carregarTotalClientes(idCampo) {
                    if (typeof(Storage) !== "undefined") {
                        let totalcliente = localStorage.getItem("totalCliente");
                        if (totalcliente == null) totalcliente = 0;
                        document.getElementById(idCampo).innerHTML = totalcliente;
                    }
                    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
                }
    
                function listarcadastro() {
                if (typeof(Storage) !== "undefined") {
                let clientes = localStorage.getItem("clientes");
                document.write("<h1>Clientes:</h1>")
                if (clientes == null)
                    document.write("<h3>Ainda não há nenhum cadastro de clientes</h3>");
                else {
                    clientes = JSON.parse(clientes);
                    clientes.forEach(Idnomes => {
                        document.write("<ul>");
                        document.write("<li>Nome do cliente: "+Idnomes.nome+"</li>");
                        document.write("<li>CPF do cliente: "+Idnomes.cpf+"</li>");
                        document.write("<li>Endereço do cliente: "+Idnomes.Endereço+"</li>");
                        document.write("<li>Telefone do cliente: "+Idnomes.Telefone+"</li>");
                        document.write("</ul>");
                    });
                }
            } 
            else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
        }
                var pergunta = window.prompt(`Deseja continuar?
                1 - sim
                2 - não
                `)
                    }
                     }
            while(pergunta ==2)