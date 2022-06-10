let fuente = 16;
function mas(){
    document.querySelector("#textoBiblia").style.fontSize=fuente + 2 +"px";
    fuente = fuente + 2
}

function menos(){
    document.querySelector("#textoBiblia").style.fontSize=fuente - 2 +"px";   
    fuente -=2
}

export function Masomenos({color}){
    return (<>
            <div 
                className=" fixed-bottom my-1  text-center  ">
                <button 
                    className={` btn shadow-lg mx-1 btn-sm w-25 col btn-${color}`} onClick={mas}>+</button >
                <button 
                    className={` btn shadow-lg mx-1 btn-sm w-25 col btn-${color}`} onClick={menos}>-</button>
            </div>
    </>)
}

