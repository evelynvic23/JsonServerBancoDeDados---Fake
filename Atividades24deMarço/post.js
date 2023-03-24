//Função que envia os dados para o servidor

function enviarDados(){
    const nome = document.getElementById("nome").value;

    const idade = document.getElementById("idade").value;

    //Para envio dos dados para o servidor utilizando o método fetch()

    fetch("http://localhost:3000/pessoas", {
        method: "POST", //Método HTTP utilizando

        headers: {
            "Content-Type":
            "application/json"
            //Tipo de conteúdo enviado (JSON)
        },
        body: JSON.stringify
        ({nome: nome, idade: idade})
    })
    .then(response => response.json())
}