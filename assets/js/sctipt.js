

/*
case Sentive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagNome()
por Id: getElementById()
por Nome: getElementsByName()
por Classe:getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto =  document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width= '100%'

function validaNome() {

   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txt.innerHTML = 'Nome Inválido'
      txt.style.color = 'red' 
   } else {
      txt.innerHTML = 'Nome Válido'
      txt.style.color = 'green'

   }

}

function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail') 

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
      txt.innerHTML = 'E-mail inválido'
      txt.style.color = 'red'
   } else {
      txt.innerHTML = 'E-mail válido'
      txt.style.color = 'green'
     
   }
}
