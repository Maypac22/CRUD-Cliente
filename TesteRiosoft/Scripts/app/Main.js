//Função LISTAR - Lista dos dados cadastrais
function createRowCliente(cliente) {
    var tr = document.createElement("tr");
    var columnButton = document.createElement('td');
    var columnButtonDelete = document.createElement('td');
    var columnNome = document.createElement('td');
    var columnEmail = document.createElement('td');
    var columnTelefone = document.createElement('td');
    var columnDataNasc = document.createElement('td');
    var columnDataCad = document.createElement('td');
    var columnDataAlt = document.createElement('td');

    
    columnNome.innerHTML = cliente.Nome; //innerHTML requisita a resposta no html
    columnEmail.innerHTML = !cliente.Email ? '' : cliente.Email; //Para todo elemento que for notnull estabelecer a não obrigatoriedade,dando seguimento a requisição 
    columnTelefone.innerHTML = !cliente.Telefone ? '' : cliente.Telefone;
    columnDataNasc.innerHTML = cliente.DataNasc;
    columnDataCad.innerHTML = !cliente.DataCad ? '' : cliente.DataCad;
    columnDataAlt.innerHTML = !cliente.DataAlt ? '' : cliente.DataAlt;

    
    var btn = document.createElement("button"); //Create do botão Pesquisar seleciona e lista o elemento ja cadastrado no formulario
    btn.innerHTML = "Pesquisar";
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', function () { getCliente(cliente.Id); }, false); //Quando clicado no botão Pesquisar,esse evento requisitará a função Atualizar
    columnButton.append(btn);

    var btnDelete = document.createElement("button");  //Create botão de Excluir os elementos ja cadastrados da lista
    btnDelete.innerHTML = "Excluir";
    btnDelete.setAttribute('type', 'button');
    btnDelete.addEventListener('click', function () { deleteCliente(cliente.Id); }, false);
    columnButtonDelete.append(btnDelete);

    tr.append(columnButton);
    tr.append(columnButtonDelete);
    tr.append(columnNome);
    tr.append(columnEmail);
    tr.append(columnTelefone);
    tr.append(columnDataNasc);
    tr.append(columnDataCad);
    tr.append(columnDataAlt);

    $("#tableCliente tbody").append(tr);
}