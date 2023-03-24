//Função que deleta dados do servidor
function deletarDados(){
    const id = document.getElementById("id").value;

    fetch(`http://localhost:3000/pessoas/${id}`,{
        method: "DELETE",
    })
    .then(response => response.json())
}