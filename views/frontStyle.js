let d = new Date();
monName = new Array ("jan", "fev", "mar", "abr", "maio", "jun", "jul", "ago", "set", "out", "nov", "dez")
const dataHora = d.getHours() + ":" + d.getMinutes() + " " + " - " + d.getDate () + " de " + monName [d.getMonth() ]   +  " de "  + d.getFullYear () + "."

const para = document.createElement("p");
para.innerHTML = dataHora;
document.getElementById("DataH").appendChild(para);



function modalAcao(){
    let modal = document.querySelector('.modal')
    
    modal.style.display = 'block';

    let fundo = document.querySelector('.fade')
    
    fundo.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.modal')
    
    modal.style.display = 'none';

    let fundo = document.querySelector('.fade')
    
    fundo.style.display = 'none';

    let modalEdit = document.querySelector('.modalEdit')
    
    modalEdit.style.display = 'none';

    let fundoEdit = document.querySelector('.fade')
    
    fundoEdit.style.display = 'none';
}

function modalEdit(){
    let modal = document.querySelector('.modalEdit')
    
    modal.style.display = 'block';

    let fundo = document.querySelector('.fade')
    
    fundo.style.display = 'block';
}