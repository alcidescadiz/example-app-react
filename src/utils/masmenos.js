let fuente = 12;
export function mas(){
    document.querySelector("#textoBiblia").style.fontSize=fuente + 2 +"px";
    fuente = fuente + 2
}

export function menos(){
    document.querySelector("#textoBiblia").style.fontSize=fuente - 2 +"px";   
    fuente -=2
}