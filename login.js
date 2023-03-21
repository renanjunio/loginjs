
let dados = [
    {
        nome: "Renan",
        senha: "1200"
    },

    {
        nome: "Hugo",
        senha: "1200"
    },

    {
        nome: "Marcus",
        senha: "1200"
    },

    {
        nome: "Gabi",
        senha: "1200"
    },

    {
        nome: "Fernando",
        senha: "1200"
    },

    {
        nome: "Fernandos",
        senha: "1200"
    },

    {
        nome: "Caique",
        senha: "1200"
    },

    {
        nome: "Marigabi",
        senha: "1200"
    },

    {
        nome: "Thais",
        senha: "1200"
    },

    {
        nome: "Apolo",
        senha: "1200"
    },

    {
        nome: "TaylorSwift",
        senha: "1200"
    },

    {
        nome: "Carlos",
        senha: "1200"
    },

    {
        nome: "Bruna",
        senha: "1200"
    },

    {
        nome: "Rodrigo",
        senha: "1200"
    },

    {
        nome: "Bruno",
        senha: "1200"
    },


]


//tudo sobre o html2 

let nomepag2 = localStorage.getItem("usuarioLogado")

alert(nomepag2)
if (nomepag2 != undefined) {

    let h2nome = document.querySelector("h2#nome")
    h2nome.innerHTML += ` ${nomepag2}`

    //função sair
    const sair = document.querySelector("input#sair")
    sair.addEventListener("click", function (e) {
        localStorage.removeItem("usuarioLogado")
        window.location.href = "./login.html"
    });

    window.addEventListener('beforeunload', function (e) {
        localStorage.removeItem('usuarioLogado');

    });

    const inputlimpar = document.querySelector("#limparusuarios");
    inputlimpar.addEventListener("click", limpartela)

    function limpartela() {
        let lista = document.querySelector('div.lista');
        lista.innerHTML = "";
    }

    //função listar
    const inputlistarusuarios = document.querySelector("input#listarusuario")
    inputlistarusuarios.addEventListener("click", listarusuario0)

    function listarusuario0() {
        alert("teste")
        let lista = document.querySelector('div.lista');
        lista.innerHTML = "";
        lista.innerHTML += "Listar usuário <br><br>"
        for (let index = 0; index < dados.length; index++) {
            lista.innerHTML += `Usuário ${index + 1} - ${dados[index].nome} <br>`
        }
    }


    const inputdeletar1 = document.querySelector("#deletarusuarios1")
    inputdeletar1.addEventListener("click", deletarusuario1)

    function deletarusuario1() {
        let lista = document.querySelector('div.lista');
        lista.innerHTML = "";

        lista.innerHTML += "Deletar usuário <br><br>"
        for (let index = 0; index < dados.length; index++) {

            lista.innerHTML += `<div><input type="checkbox" id="${index}"><label>"${dados[index].nome}"</label></div> `
        }
        lista.innerHTML += `<input type="button" value="Deletar" class="botao" id="deletarusuarios2" >` // criação do botao fora do for

        //função e evento para deletar os escolhidos 
        const inputdeletar2 = document.querySelector("#deletarusuarios2");
        inputdeletar2.addEventListener("click", deletarusuario2)
    }



    function deletarusuario2() {
        let userdeletado = [""]
        for (let index = 0; index < dados.length; index++) {
            let checkbox = document.getElementById(`${index}`);
            if (checkbox.checked == true) {
                userdeletado[index] = 1
            } else {
                userdeletado[index] = 0
            }
        }
        for (let index = userdeletado.length - 1; index >= 0; index--) {
            if (userdeletado[index] == 1) {
                dados.splice(index, 1);
            }

        }

        listarusuario0()
    }

    // função adicionar os usuarios
    const adicionarusuario1 = document.querySelector("#adicionarusuarios1");
    adicionarusuario1.addEventListener("click", adicionariousuarios1)

    //função para mostrar o html form para adicionar usuarios

    function adicionariousuarios1() {
        let lista = document.querySelector('div.lista');
        lista.innerHTML += "Adicionar usuário <br><br>"

        lista.innerHTML += `<form>
                            <label>Nome usuário:</label><br>
                            <input type="text" class="inputuser"> <br>

                            <label >Digite a senha:</label><br>
                            <input type"password" class="inputsenha"> <br>
                            
                            <label >Confirme sua senha:</label><br>
                            <input type"password" class="inputsenha2"> <br>

                            <input type="button" value="Adicionar User" class="botao"
                            id="adicionarusuarios2">
                            </form>`

        //testando e gerenciando se o botão adicionar foi clicado
        const inputadicionar2 = document.querySelector("#adicionarusuarios2")
        inputadicionar2.addEventListener("click", adicionarusuarios2)
    }



    function adicionarusuarios2() {
        let novousuario = {
            nome: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }

        let senha2 = document.querySelector('input.inputsenha2').value //confirmação da senha

        if (novousuario.senha == senha2) {
            let repetida = 0
            for (let index = 0; index < dados.length; index++) {
                if (dados[index].nome == novousuario.nome) {
                    repetida = 1
                }
            }
            if (repetida == 0) {
                dados.push(novousuario) // adiciona valores na ultima posição do vetor
                alert("Usuário adicionado com sucesso!")
                listarusuario0()
            } else {
                alert("Usuário já existe no cadastro, digite outro nome")
                adicionarusuario1()
            }

        } else {
            alert("A senha é diferenre da confirmação")
            adicionariousuarios1()
        }

    }

    //função e evento para atualizar os usuários
    const inputatualizar1 = document.querySelector("#atualizarusuarios1");
    inputatualizar1.addEventListener("click", atualizarusuarios1)
    function atualizarusuarios1() {
        alert('teste')
        let lista = document.querySelector('div.lista');
        lista.innerHTML = "";
        lista.innerHTML += "Trocar usuário <br><br>"
        lista.innerHTML += `<form>
                        <label>Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label>Digite a senha atual:</label><br>
                        <input type="password" class="inputuser"> <br>
                        <label>Novo usuário:</label><br>
                        <input type="text" class="inputuser1"> <br>
                        <label>Nova senha:</label><br>
                        <input type="password" class="inputsenha1"> <br>
                        <label>Confirmar senha:</label> <br>
                        <input type="password" class="inputsenha2"> <br>
                        <input type="button" value="trocar" class="botao" id="trocarsenha">
                        </form>`

        const inputtrocarsenha1 = document.querySelector("trocarsenha");
        inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
    }

    //função para atualizar todos os procesos de troca de senha

    function atualizarusuarios2() {
        let nome = document.querySelector('input.inputuser').value;
        let nome1 = document.querySelector('input.inputuser1').value;
        let senha = document.querySelector('input.inputsenha').value;
        let senha1 = document.querySelector('input.inputsenha1').value;
        let senha2 = document.querySelector('input.inputsenha2').value;

        let errosenha = 1
        let repetida = 0
        let indice = 0 // usado para pegar a posição no vetor para salvar nome e senha

        for (let index = 0; index < dados.length; index++) { // varredura nos nomes do usuários
            if (dados[index].nome == nome1) {
                if (dados[index].nome != nome) {
                    repetida = 1 // repetida fica em 1 se já tiver o nome igual dentro do "banco de dados"
                }
            }
        }
        if (repetida == 0) {
            for (let index = 0; index < dados.length; index++) {
                if (dados[index].nome == nome) {
                    repetida = 0
                    if ((dados[index].senha == senha) && (senha1 == senha2)) {
                        errosenha = 0
                        indice = index
                        index = dados.length
                    }

                }
            }

        }
        if (repetida == 0) {
            if (errosenha == 0) {
                let lista = document.querySelector('div.lista');
                lista.innerHTML = "";
                dados[indice].nome = nome1
                dados[indice].senha = senha1
                alert("Dados atualizados com sucesso")
                listarusuario0()
            } else {
                alert("Login incorreto, favor verificar os dados, senha incorreta")
            }

        } else {
            alert("Login incorreto, favor verificar os dados, usuário incorrreto")
            atualizarusuarios1()
        }
    }

    const testar = document.querySelector("#testar1");
    testar.addEventListener("click", testaruser1)



    function testaruser1() {

        let lista = document.querySelector(`div.lista`);
        lista.innerHTML = "";
        lista.innerHTML += "Testar usuário <br><br>"
        lista.innerHTML += `<form>
                        <label> Digite usuário: </label> <br>
                        <input type="text" class="inputuserteste"> <br>
                        <label> Digite a senha: </label> <br>
                        <input type="password" class="inputsenhateste"><br>
                        <input type="button" value="testar" class="botao" id="testaruser1">
                       </form>`

        const inputtestaruser1 = document.querySelector("#testaruser1");
        inputtestaruser1.addEventListener("click", testaruser2)

    }


    function testaruser2() {

        let nome = (document.querySelector('input.inputuserteste')).value
        let senha = (document.querySelector('input.inputsenhateste')).value

        for (let index = 0; index < dados.length; index++) {

            if (nome == dados[index].nome && senha == dados[index].senha) {
                index = dados.length
                alert("Login realizado com sucesso")
            } else if (index == dados.length - 1) {
                alert("Usuário ou senha invalido")
            }

        }

    }


}





//tudo sobre o html 1

else {
    function enviar() {

        const nome = document.querySelector('input#nome').value
        const senha = document.querySelector('input#senha').value
        let controle = 0

        for (let index = 0; index < dados.length; index++) {

            if ((nome == dados[index].nome) && (senha == dados[index].senha)) {
                alert('Usuario validado')

                localStorage.setItem("usuarioLogado", dados[index].nome)


                controle = 1
                window.location.href = "./login2.html"
                index = dados.length

            }

        }

        if (controle == 0) {
            alert('Usuario não encontrado')
        }



    }

}

