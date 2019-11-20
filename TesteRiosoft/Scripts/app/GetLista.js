//Função responsavel por listar e entregar os dados em JSON com requisições AJAX para o servidor sem recarregar a página.
function lista() {
    $.ajax({
        type: 'GET',
        url: '/api/Cliente',
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                createRowCliente(data[i]);
            }
        },
        error: function (msg){
            alert(msg);
        }
    })
}