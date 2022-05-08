
var moveDiv = document.querySelector(".circulo");
 moveDiv.addEventListener("click" , function(){
   document.querySelector(".tudo").classList.toggle("moveQuadrado"); // se a classe nao tiver ele coloca se tive ele tira
 }); 

 var alteracao = document.querySelector(".tudo");

 alteracao.addEventListener("100%" , function(){
    document.querySelector(".tudo").classList.toggle(""); 
 })

