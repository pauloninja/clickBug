/*
-----------------------------------------------
    VARIÁVEIS E FUNÇÕES

*/

//LISTA COM OS INVASORES
let invasores = document.getElementsByClassName('invasor')
console.log('invasor')


//LISTA COM OS "BONZINHOS"
let bonzinhos = document.getElementsByClassName('bonzinho')


let score = 0

let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth
console.log(larguraQuadro)

//Função para posicionar um elemento
//recebe parâmetro el que informa o elemento
const posicElemento = (el) => {
    let posX = Math.floor(Math.random()*1000)
    let posY = Math.floor(Math.random()*400)
    el.style.position = 'absolute'
    el.style.left = -posX+'px'
    el.style.top = posY+'px'

}
/* 
--------------------------------
EVENTOS E EXECUÇÕES AUTOMÁTICAS 
--------------------------------
*/

//desloca os elementos na tela
//recebe parâmetros elementos, velocidade, incremento

const moveElemento = (el, veloc, inc)=> {

    //executa a cada x milessegundos
    const anima = setInterval(()=>{

        veloc = veloc + inc
        el.style.left = veloc +'px'
        //verifica se o elemento saiu do quadro 
        //ou se foi clicado (classe "morto")
        //retorna para uma posição 
        //á esquerda do quadro (re-entra)
        
       

        if(veloc > larguraQuadro || el.classList.contains('morto')){
           //sorteia um valor entre -
            veloc = -Math.random()*450+50
            inc = Math.random()*140+10
            posicElemento(el)
        }
    }, 40);
}


//ao clicar nos insetos
const clickBug = (el)=>{
    //Adiciona a classe "morto" ao inseto
    el.classList.add('morto')
    //Adiciona 10 pts ao score
    score += 10
    document.getElementById('score').innerText = score
}



for(inv of invasores){
    posicElemento(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19+1)
    inv.addEventListener('mousedown', (evt)=>{clickBug(evt.target)})
}


//moveElemento(document.getElementById('inv1'), 5, 5)


/* var n1 = prompt("Digite um numero: ")
n1 = parseFloat(n1)

var n2 = prompt("Digite um numero: ")
n2 = parseFloat(n2)

alert(n1 + n2) */
