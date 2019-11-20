function cadastraCliente(form, e) {
    e.preventDefault(); //cancela o event padrão de carregar outra pagina,dando um feedback tipo "modal" sem alterar ou carregar a pagina 

    var cliente = {
        "Nome": document.getElementById("fullName").value,
        "Telefone": document.getElementById("telefone").value,
        "DataNasc": document.getElementById("dataNasc").value,
        "Email": document.getElementById("email").value
    };

    //utilizando a variavel no espoco de bloco 
    let idCliente = document.getElementById('idCliente').value;

    if (idCliente && idCliente > 0) {


        //PUT update
        $.ajax({
            type: 'PUT',
            url: '/api/Cliente/' + idCliente,
            data: cliente,
            success: function (data) {
                $("#tableCliente tbody tr").remove();
                lista();
                form.reset();//valida as alterações realizadas sem comprometer os dados 
                $("#btnSalvar").html("Cadastrar");
                document.getElementById("idCliente").value = 0;
                alert('Atualizado com sucesso');
            },
            error: function (msg) {
                $("#error").show();
                $("#error").html("Ocorreu um erro ao salvar o formulário");
            }
        });

    }
    //POST Create
    else {
        $.ajax({
            type: 'POST',
            url: '/api/Cliente',
            data: cliente,
            success: function (data) {
                createRowCliente(data);
                form.reset();
                alert("Cadastrado com sucesso");
            },
            error: function (msg) {
                $("#error").show();
                $("#error").html("Ocorreu um erro ao salvar o formulário");
            }
        });
    }

    
}

