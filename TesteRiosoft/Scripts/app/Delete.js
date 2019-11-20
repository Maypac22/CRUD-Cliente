function deleteCliente(id) {

    //requisição AJAX DELETE 
    $.ajax({
        type: 'DELETE',
        url: '/api/Cliente/'+id,
        success: function (data){
            alert("Deletado com sucesso");
            //chamada da index do html com requisição AJAX
            $("#tableCliente tbody tr").remove();
            lista();
        },
        error: function (msg){
            alert(msg);
        }
    })
}