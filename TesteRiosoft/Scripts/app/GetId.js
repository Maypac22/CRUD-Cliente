function getCliente(id) {
    $.ajax({
        type: 'GET',
        url: '/api/Cliente',
        data: { id: id },
        success: function (data) {
            let date = new Date(Date.parse(data.DataNasc)).toISOString().slice(0, 10); //conversão do modelo date

            if (data.DataAlteracao) {
                let datealt = new Date(Date.parse(data.DataAlteracao)).toISOString().slice(0, 10);
                document.getElementById("dataAlteracao").value = datealt;
            }
            let datecad = new Date(Date.parse(data.DataCadastro)).toISOString().slice(0, 10);

            document.getElementById("idCliente").value = data.Id;
            document.getElementById("fullName").value = data.Nome;
            document.getElementById("telefone").value = data.Telefone;
            document.getElementById("dataNasc").value = date;
            document.getElementById("dataCadastro").value = datecad;
            document.getElementById("email").value = data.Email;
            $("#btnSalvar").html("Atualizar");
        },
        error: function (msg) {
            alert(msg);
        }
    });
}