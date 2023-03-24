function fazerLogin(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;


    fetch("http://localhost:3000/pessoas")
    .then(response => response.json())
    .then(data => {
        //Busca cujo o nome e idade coincidem com os valores digitados. Esse p seria o parâmetro do find(procurar). Função CallBack
        const pessoa = data.find(p => p.nome === nome && p.idade == idade);


        if(pessoa){
            window.location.href = "bemvindo.html";
        }else{
            alert("Nome e idade não encontrados no banco de Dados :( ");
        }
    })
}