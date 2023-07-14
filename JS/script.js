    
    
    
    // Tela Inicial

    let listaImagem = ['../Imagens/Vingadores.jpg','../Imagens/Mario.jpg','../Imagens/FastAndFurious.jpg']

    let indexAtual = 0
    let imagem = document.getElementById("img")

    
    function avancarImg(){

    
      if(indexAtual < listaImagem.length-1){
        indexAtual += 1
        imagem.src = listaImagem[indexAtual]
      }
    
    }
    function voltarImg(){
    
      if(indexAtual > 0){
        indexAtual -= 1
        imagem.src = listaImagem[indexAtual]
      }
    
    }
    function linkPageFilmes(){
        window.location.href = "../HTMLS/telaFilmes.html"
    }

    // Direcionar para a seleção de assentos
    function direcionarAssentos(){

        window.location.href = "../HTMLS/assentosSA.html"
    
    }



        
    



// Tela de cadastro

function linkPageCadastrar(){

    window.location.href = "../HTMLS/cadastro.html"
    

}

// Tela de Login
function login(){

    window.location.href = "../HTMLS/login.html"

}

// Fazer o login
function logarConta(){

    let emailLogar = document.getElementById("emailLogin").value
    let senhaLogar = document.getElementById("senhaLogin").value
    let loginIncorreto = document.getElementById("invalidezLogin")

    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i = 0; i < usuarios.length; i++){

        if(usuarios[i].emailCadastrado == emailLogar && usuarios[i].senhaCadastrada == senhaLogar){
            
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarios[i].emailCadastrado))
            window.location.href = "../HTMLS/inicial.html"


        }else if(usuarios[i].emailCadastrado != emailLogar && usuarios[i].senhaCadastrada == senhaLogar){

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Usuário inválido"

        }else if(usuarios[i].emailCadastrado == emailLogar && usuarios[i].senhaCadastrada != senhaLogar) {

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Senha inválida"

        }else{

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Dados inválidos"

        }

    }

    

}

    // Tela Cadastro

    let usuarios = []
    let usuario

    
function cadastrarConta(){

            let nomeCompleto = document.getElementById("nomeCadastro").value
            let email = document.getElementById("emailCadastro").value
            let endereco = document.getElementById("enderecoCadastro").value
            let telefone = document.getElementById("telefoneCadastro").value
            let senhaCadastro = document.getElementById("senhaCadastro").value
            let confirmarSenhaCadastro = document.getElementById("confirmSenhaCadastro").value
            let invalido = document.getElementById("invalidezCadastro")
            let existe = false
            
            
            
                
                if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
                    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []

                    invalido.innerHTML = ""
            
                
                    
                for(i = 0; i < usuarios.length; i++){
                    
                    if(usuarios[i].emailCadastrado == email){
                        existe = true
                    }
            
                }
            
                /////////////////////////////
                if(!existe){
            
                    usuario = {
                        nomeCadastrado: nomeCompleto,
                        emailCadastrado: email,
                        enderecoCadastrado: endereco,
                        telefoneCadastrado : telefone,
                        senhaCadastrada: senhaCadastro,
                        filme: {
                            nomeFilme: '',
                            cadeiras: [],
                            valor: 0
                        } 
                        
                    }

                        usuario.nomeCadastrado = nomeCompleto
                        usuario.emailCadastrado = email
                        usuario.enderecoCadastrado = endereco
                        usuario.telefoneCadastrado = telefone
                        usuario.senhaCadastrada = senhaCadastro

                        
                
                        if(usuarios == null){
                    
                            usuarios = []
                        }    
                            usuarios.push(usuario)
                            localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))
                
                        
                        window.location.href = "../HTMLS/login.html"
                
                        LimpaInputsCadastro()
                
                
                
                    }else{
                        invalido.innerHTML = ""
                        invalido.innerHTML = "E-mail ja cadastrado"
                    }
                
            
                }else if(email == "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
                    invalido.innerHTML = ""
                    invalido.innerHTML = "Email não preenchido"
                }
                else if(email != "" && senhaCadastro == "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
                    invalido.innerHTML = ""
                    invalido.innerHTML = "Senha não preenchida"
                }
                else if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro == "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
                    invalido.innerHTML = ""
                    invalido.innerHTML = "Confirme sua senha"
                }
                else if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
                    invalido.innerHTML = ""
                    invalido.innerHTML = "Confirme seu telefone"
                }
                else if(email == "" && senhaCadastro == "" && confirmarSenhaCadastro == "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
                    invalido.innerHTML = ""
                    invalido.innerHTML = "Preencha os campos"
                }
            
                    
                }
            
            
 // Limpar Inputs Cadastro
            
function LimpaInputsCadastro(){
            
    document.getElementById("nomeCadastro").value = ''
    document.getElementById("emailCadastro").value = ''
    document.getElementById("enderecoCadastro").value = ''
    document.getElementById("telefoneCadastro").value = ''
    document.getElementById("senhaCadastro").value = ''
    document.getElementById("confirmSenhaCadastro").value = ''
                
}


// Comprar Assentos

function comprarAssentos(){

    window.location.href = "../HTMLS/assentosSA.html"
    
}



// Assentos

// let vendidos = []
let cinema = JSON.parse(localStorage.getItem("cinema")) || [{filme: 'Vingadores',assentosDisponiveis: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}]

let cadeirasSelecionadas = []

let somaAssentos 


// Atualizar para vermelha após a reserva

function atualizarPoltrona(iFilme){

    for(i = 0; i < 32; i++){

        let id = 'cad' + i
        
        if(!cinema[iFilme].assentosDisponiveis.includes(i)){
            document.getElementById(id).style.backgroundColor = 'red'
        }
        else{
            console.log(id);
            document.getElementById(id).style.backgroundColor = ''
        }

    }
    
}

let precoAssentosA = 0
let precoAssentosB = 0
let totalAssentos = 0

// Pintar a cadeira

function selecionarCadeira(cadeira){

    // usuarios = JSON.parse(localStorage.getItem("usuarioSalvo"))
    // emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    // let cinemaSalvo = JSON.parse(localStorage.getItem("cinema")) || []
    
let preco = 10
let listaAssentos = document.getElementById("contagemAssento")
let totalPreco = document.getElementById("total")
emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []

let posicaoUsuario

    if(cinema[0].assentosDisponiveis.includes(cadeira)){
        console.log(cadeirasSelecionadas);
        if (!cadeirasSelecionadas.includes(cadeira)){
            document.getElementById(('cad' + cadeira)).style.backgroundColor = 'green'
            cadeirasSelecionadas.push(cadeira) 
        }else{
            document.getElementById(('cad' + cadeira)).style.backgroundColor = ''
            cadeirasSelecionadas.splice(cadeirasSelecionadas.indexOf(cadeira), 1)
        }
    
        posicaoUsuario = posicaoUsuarioLogado()
        // for(i = 0; i < usuarios[posicaoUsuario].filme.cadeiras; i++){
        // usuarios[posicaoUsuario].filme.valor 
        // }
        precoAssentosA = cadeirasSelecionadas.length * preco
        precoAssentos = usuarios[posicaoUsuario].filme.cadeiras.length * preco 
        totalAssentos = precoAssentosA + precoAssentosB
        listaAssentos.innerHTML = cadeirasSelecionadas
        totalPreco.innerHTML = totalAssentos
        console.log(totalAssentos);
    }

    localStorage.setItem("usuarioSalvo", JSON.stringify(usuarios))

}

// Descobrir a posição do usuario
function posicaoUsuarioLogado(){
    emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []

    for(i = 0; i < usuarios.length; i++){
        if(emailLogado == usuarios[i].emailCadastrado){
            return i
        }
    }
}

// Direcionar para a página do usuário
function reservarAssentos(){

    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    posicaoUsuario = posicaoUsuarioLogado()
    usuarios[posicaoUsuario].filme.valor = totalAssentos
    let comprinha = {
        nomeFilme: 'Os vingadores',
        cadeiras: cadeirasSelecionadas,
        valor: usuarios[posicaoUsuario].filme.valor
    }
    emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    for(i = 0; i < usuarios.length; i++){
        
        if(emailLogado == usuarios[i].emailCadastrado){
            
            usuarios[i].filme = comprinha

        }

    }
    for(i = 0; i < cadeirasSelecionadas.length; i++){

        let indice = cinema[0].assentosDisponiveis.indexOf(cadeirasSelecionadas[i])
        if(indice != -1){

            cinema[0].assentosDisponiveis.splice(indice, 1)
            localStorage.setItem("cinema", JSON.stringify(cinema))
        }
    }
    
    
    // localStorage.setItem("infoCompra", JSON.stringify(comprinha))
    localStorage.setItem("usuarioSalvo", JSON.stringify(usuarios))
    cadeirasSelecionadas = []
    window.location.href = "../HTMLS/telaPerfil.html"

}

function carregarPerfil(){

    
    let emailEditar = document.getElementById('inptEmailUsuario')
    let senhaEditar = document.getElementById('inptSenhaUsuario')
    let enderecoEditar = document.getElementById('inptEnderecoUsuario')
    let nomeEditar = document.getElementById('inptNomeUsuario')
    let telefoneEditar = document.getElementById('inptTelUsuario')
    let filmeReservado = document.getElementById('inptFilmeSelecionado')
    let assentosReservados = document.getElementById('inptAssentoReservado')
    let precoTotalFilme = document.getElementById('inptPrecoTotal')

    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    
    for(i = 0; i < usuarios.length; i++){
    
        if(emailLogado == usuarios[i].emailCadastrado){
            console.log(usuarios[i]);
            nomeEditar.value = usuarios[i].nomeCadastrado
            emailEditar.value = usuarios[i].emailCadastrado
            enderecoEditar.value = usuarios[i].enderecoCadastrado
            telefoneEditar.value = usuarios[i].telefoneCadastrado
            senhaEditar.value = usuarios[i].senhaCadastrada
            filmeReservado.value = usuarios[i].filme.nomeFilme
            assentosReservados.value = usuarios[i].filme.cadeiras
            precoTotalFilme.value = usuarios[i].filme.valor
    
        }
    
    }

    
    
}

function editarAssentos(){

    window.location.href = "../HTMLS/assentosSA.html"
    

}


let editarBotao = document.getElementById("salvarMudancas") 

function editarInpts(){

    editarBotao.style.backgroundColor = "red"
    editarBotao.style.border = "0px"
    editarBotao.disabled = false

}


// Editar dados na página de perfil
function salvarEdicoes(){

    let nomeCompleto = document.getElementById("inptNomeUsuario").value
    let email = document.getElementById("inptEmailUsuario").value
    let endereco = document.getElementById("inptEnderecoUsuario").value
    let telefone = document.getElementById("inptTelUsuario").value
    let senhaCadastro = document.getElementById("inptSenhaUsuario").value

    let usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    for(i = 0; i < usuarios.length; i++){

        if(emailLogado == usuarios[i].emailCadastrado){

            usuarios[i].nomeCadastrado = nomeCompleto
            usuarios[i].emailCadastrado = email
            usuarios[i].enderecoCadastrado = endereco 
            usuarios[i].telefoneCadastrado = telefone
            usuarios[i].senhaCadastrada = senhaCadastro 
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[i].emailCadastrado))
             

        }


    }
    localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))
    console.log(usuarios);

    editarBotao.style.backgroundColor = "black"
    editarBotao.style.border = "2px solid white"
    
}

// Deletar conta na página de perfil

function deletarUsuario(){

    let usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    let posicaoDeletar
    for(i = 0; i < usuarios.length; i++){

        if(emailLogado == usuarios[i].emailCadastrado){

            posicaoDeletar = i
            

        }


    }
    let pergunta = prompt("Deseja mesmo deletar? S/N")
    if(pergunta == "S"){

        usuarios.splice(posicaoDeletar, 1)
        alert("Deletado!!!")
        localStorage.setItem('usuarioLogado', '')  
        localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))  
        window.location.href = "../HTMLS/inicial.html"

    }

}

// Deslogar Conta

function deslogarConta(){

    let usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    
    for(i = 0; i < usuarios.length; i++){

        if(emailLogado == usuarios[i].emailCadastrado){

            
            localStorage.setItem('usuarioLogado', '')   
            window.location.href = "../HTMLS/inicial.html"
            
            
        }else{

            window.location.href = "../HTMLS/inicial.html"

        }


    }
    
}

// Aparecer nome em vez de LOGIN

function aparecerNome(){
    let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    if(emailLogado != ""){

        document.getElementById('btnLogin').innerHTML = `Olá ${emailLogado}`

    }else{
        document.getElementById('btnLogin').innerHTML = `Login`
    }
}



function direcionarPerfil(){

    window.location.href = "../HTMLS/telaperfil.html"

}


function linkHistorico(){

    window.location.href = "../HTMLS/historico.html"

}

function listarHistorico(){
    
    let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    
    let usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    

    let divList = document.getElementById('historicoCompra')
    let listaReservas, produtoDiv

    while(divList.firstChild){

        divList.removeChild(divList.firstChild);

    }

    for (i = 0; i < usuarios.length; i++){

        let nomeFilmes = document.createTextNode(usuarios[i].filme.nomeFilme)
        let cadeiraFilmes = document.createTextNode(usuarios[i].filme.cadeiras)
        let valorFilmes = document.createTextNode(usuarios[i].filme.valor)

        // Variável de produto recebe uma div nova (criada)
        listaReservas = document.createElement('div')

        divList.appendChild(listaReservas)

            // Define para essa div uma class chamada Produtos
            listaReservas.classList = ('Reservas')

            // Define para essa div um id chamado Produtos(posição)
            listaReservas.id = (`Reservas${i}`)
            if(usuarios[i].filme.valor != 0){

            // Cria um laço de repetição para pegar os dados dos produtos e mostrar separadamente
            for (j=0; j < 5; j++){

                // Variável de produto recebe uma div nova (criada)
                produtoDiv = document.createElement('div')

                // Adiciona na div produtoLista (como div filha) essa nova div criada
                listaReservas.appendChild(produtoDiv)

                // Define para essa div uma class chamada Divs
                produtoDiv.classList = ('Divs')

               // Utiliza valor de j no loop, para adicionar os dados dos produtos na div
               switch(j){

                // Na primeira passada do loop
                case 0:

                    // Define uma div filha que recebe o código do produto
                    produtoDiv.appendChild(nomeFilmes)
                    break

                // Na segunda passada do loop
                case 1:

                    // Define uma div filha que recebe o nome do produto
                    produtoDiv.appendChild(cadeiraFilmes)
                    break

                // Na terceira passada do loop
                case 2:

                    // Define uma div filha que recebe a marca do produto
                    produtoDiv.appendChild(valorFilmes)
                    break

                    
                }
            

            }        
        }else if(usuarios[i].filme.valor == 0){
            document.getElementById('historicoCompra').style.color = "#fff"
            document.getElementById('historicoCompra').style.fontSize = "30px"
            document.getElementById('historicoCompra').style.marginTop = "30px"
            document.getElementById('historicoCompra').style.fontFamily = "Netflix Sans"
            divList.innerHTML = "Histórico vazio!!"
            
        }
        }
    }


    function apagarHistorico(){

        let emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
        let usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
        posicaoUsuario = posicaoUsuarioLogado()

        for(i = 0; i < usuarios[posicaoUsuario].filme.cadeiras.length; i++){
            cinema[0].assentosDisponiveis.push(usuarios[posicaoUsuario].filme.cadeiras[i])
        }
        

            

                usuarios[posicaoUsuario].filme.nomeFilme = '' 
                usuarios[posicaoUsuario].filme.cadeiras = [] 
                usuarios[posicaoUsuario].filme.valor = 0 

           

        

        localStorage.setItem('cinema', JSON.stringify(cinema))
        localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))

    }

    function voltarPerfil(){

        window.location.href = "../HTMLS/telaperfil.html"

    }









    
        
    
