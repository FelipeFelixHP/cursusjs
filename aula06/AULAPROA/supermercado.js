
    //------------------------------------------------ -------------------------------------------------- ---------
// Função: validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto)
// Verifica se foram informados o nome e o código do produto
// Parâmetros:
// - idNomeProduto: id do campo que contém o nome do produto
// - idCodProduto: id do campo que contém o código do produto
// - idQtidadeProduto: id do campo que contém a quantidade do produto
// OBS: Se faltar alguma informação (nome ou código do produto) aparecerá uma mensagem de erro. Em caso de
// sucesso (todas as informações enviadas), chama a função cadastrarProduto(...)
// Retorno: nenhum
//------------------------------------------------ -------------------------------------------------- ---------
function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
     else if (código == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, código, parseInt(qtidade));
}
//------------------------------------------------ -------------------------------------------------- ---------
// Função: cadastrarProduto(produto, codig, qtidade)
// Cadastra um novo produto (nome, código e quantidade) no estoque
// Parâmetros:
// - produto: nome do produto a ser cadastrado no estoque (Ex: arroz)
// - codig: código do produto a ser cadastrado no estoque (Ex: a01)
// - qtidade: quantidade do produto a ser cadastrado no estoque (Ex: 7)
// OBS: Apos cadastrar o novo produto no estoque, atualiza a quantidade de itens no carrinho, ou, chama
// uma função atualizadaTotalEstoque()
// Retorno: nenhum
//------------------------------------------------ -------------------------------------------------- ---------
function cadastrarProduto(produto, codig, qtidade) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

    if (typeof(Armazenamento) !== "indefinido") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        localização.recarregar();
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//------------------------------------------------ -------------------------------------------------- ---------
// Função: atualizarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrados no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum
//------------------------------------------------ -------------------------------------------------- ---------
function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}
//------------------------------------------------ -------------------------------------------------- ---------
// Função: carregarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrados no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum
//------------------------------------------------ -------------------------------------------------- ---------
function carregarTotalEstoque(idCampo) {
    if (typeof(Armazenamento) !== "indefinido") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//------------------------------------------------ -------------------------------------------------- ---------
// Exibe todos os itens do estoque (nome, código e quantidade)
// Retorno: nenhum
//------------------------------------------------ -------------------------------------------------- ---------
function listarEstoque() {
    if (typeof(Armazenamento) !== "indefinido") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            }) 
        }
    }
}