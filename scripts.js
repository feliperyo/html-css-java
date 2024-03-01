let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".starbucks")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")
let rosa = document.querySelector(".rosa")

let buttonMore = document.querySelector(".button1")
let buttonBack = document.querySelector(".button2")
let p = document.querySelector("p")

verde.addEventListener("click", () => {
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"

})
amarelo.addEventListener("click", () => {
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})
rosa.addEventListener("click", () => {
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
})

buttonMore.addEventListener("click", () => {
    p.innerHTML = "Isto acontece milhões de vezes todas as semanas – um cliente recebe uma bebida de um barista da Starbucks – mas cada interação é única. É apenas um momento entre muitos – é apenas uma mão a estender-se sobre o balcão para dar uma xícara a outra mão estendida. Mas é uma ligação. Na Starbucks, certificamo-nos de que tudo o que fazemos respeita essa ligação - desde o nosso compromisso com o café da melhor qualidade à forma como nos envolvemos com os nossos clientes e comunidades para fazer negócios de forma responsável. Desde o início da Starbucks como uma loja única, a todos os lugares em que estivemos e em todos os lugares em que tocamos, tentamos torná-lo um pouco melhor do que o encontramos."
    buttonMore.style.visibility = "hidden"
    buttonBack.style.visibility = "visible"
})

buttonBack.addEventListener("click", () => {
    p.innerHTML = "São Paulo, Brasil – A Starbucks anunciou hoje suas primeiras 18 lojas certificadas como Greener Stores no Brasil, à medida que a empresa acelera a expansão internacional de sua Estrutura Greener Store, destinada a reduzir as emissões globais de carbono, o uso de água e os resíduos enviados para aterros sanitários em 50% até 2030. Localizadas em 14 cidades de oito estados brasileiros e operadas em parceria com a SouthRock, as lojas ajudarão a reduzir o impacto ambiental da Starbucks, oferecendo aos clientes uma variedade de opções adequadas às suas preferências, garantindo, ao mesmo tempo, práticas e materiais sustentáveis."
    buttonMore.style.visibility = "visible"
    buttonBack.style.visibility = "hidden"
})