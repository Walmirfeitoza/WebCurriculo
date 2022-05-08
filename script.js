var hamburguer = document.querySelector(".hamburguer"); //querysellecto seleciona toda a classe .hamburguer e jga na variavel hamburgue
hamburguer.addEventListener("click" , function(){
     document.querySelector(".container").classList.toggle("show-menu");//a parti da classList o metodo toggle adiciona ou remove a classe show-menu
});//criacao de evento que ficará escultando o click e quando acontecer o evento de click execultara a funcao




//basicamente jogou toda a classe do html dentro de hamburgue
//adicionou um evento que esculta o click e chama a funciton essa função fala pra o sidebar adicionar uma classe
// que so sera ativada quando for clicada no hamburguer 
//a classe sidebar esta com o right ha -20rem
//ativando a classe muda a posicao prra right 0

//apos alteracao para conteiner todos os elementos e classes sao descendentes de show-menu

document.querySelector("#qtde").addEventListener("change" , atualizarPreco) //event listener recebe dois paramentros primeiro evento que quero esculta e segundo a funcao change monitora sempre que ha uma alteracao     
document.querySelector("#js").addEventListener("change" , atualizarPreco) 
document.querySelector("#layout-sim").addEventListener("change" , atualizarPreco) 
document.querySelector("#layout-nao").addEventListener("change" , atualizarPreco) 
document.querySelector("#prazo").addEventListener("change" , function(){
     const prazo = document.querySelector("#prazo").value
     document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
     atualizarPreco()
}) 

function atualizarPreco(){
     const qtde = document.querySelector("#qtde").value //retorna o valor que esta digitado dentro da caixa de texto .nodeValue
     const temjs = document.querySelector("#js").checked //verifica se o checkbox esta clicado
     const incluiLay = document.querySelector("#layout-sim").checked
     const prazo = document.querySelector("#prazo").value

     let preco = qtde * 100
     if(temjs)preco *= 1.1
     if(incluiLay){
          preco = preco + 500
     }
     else{

     }

     let taxaUrgencia  = document.querySelector("#prazo").value
     if(taxaUrgencia >1 && taxaUrgencia >=5){
          preco = preco +100;
     }
     else{
          preco = preco + 200;
     }
  

     document.querySelector("#preco").innerHTML = "R$" +  preco.toFixed(2) //pegou o id preço e alterou para o que tem na variavel preco
}

