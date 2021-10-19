const dino = document.querySelector('.dino')
const cenario = document.querySelector(".cenario")
let pulando = false
let position = 10;

const start = document.querySelector(".Start > button")
const boxstart = document.querySelector(".Start")


function jump(){
pulando=true
let subir = setInterval(()=>{
    if (position>=190) {
        clearInterval(subir);

let descer = setInterval(()=>{
    if (position<=10) {
        clearInterval(descer)
        pulando=false
    } else {
        position-=15;
        dino.style.bottom=position+'px'
    }
},25)

    } else {
        position+=20
        dino.style.bottom=position +"px";
    }
},25)


 
}

function createcactus(){
    const cactus = document.createElement('div')
    let cactusposition = 1210 
    const randomtime = Math.floor( Math.random() * 6000) 
    //criaçao e setup inicial do cactus
    cactus.classList.add('obstacle')
    cactus.style.left=cactusposition +"px"
    cenario.appendChild(cactus)
    
    //Criaçao do movimento para a esquerda do cactus

    let esquerda = setInterval(()=>{
       if (cactusposition<=-40) {
           clearInterval(esquerda)
           cenario.removeChild(cactus)
       }else if(cactusposition<0 && cactusposition<=30 && position<60){
            clearInterval(esquerda)
            document.body.innerHTML= '<h1 class="Fim">Game Over</h1>' 
       } else {
        cactusposition-=10
        cactus.style.left=cactusposition +"px"  
       }
       
    },40)
    setTimeout(createcactus,randomtime)
}

start.addEventListener('click',()=>{
    createcactus()
    boxstart.style.display="none"

})

document.addEventListener('keypress',(e)=>{
    if (e.keyCode===32) {
       if (!pulando) {
        jump()  
       }
            
        
        
    }
    
})    