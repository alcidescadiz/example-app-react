import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckedContext from "../checkedContex";

export default function MenuApp(){
    let {trueList,trueListIT, inicialContent, setIdioma, lenguaje, setLenguaje} = useContext(CheckedContext)
    
    function chanceLenguaje(){
        setLenguaje(lenguaje === 'ES' ? 'IT' : 'ES' )
        lenguaje === 'ES' ? 
            localStorage.setItem("app_bible_lang", JSON.stringify('IT')) 
            : localStorage.setItem("app_bible_lang", JSON.stringify('ES')) 
        setIdioma( lenguaje === 'ES' ? inicialContent.it : inicialContent.es)
    }
    
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="nav justify-content-center fixed-top   ">

                <Link 
                    className='nav-link text-white h4'  
                    to='/' > {lenguaje === 'ES'? trueList:trueListIT }%  </Link>
                <Link 
                    className='nav-link text-white h4' 
                    to='/conmemoracion' >{lenguaje === 'ES' ? 'Conmemoración' : 'Commemorazione'}</Link>
                <p 
                    className='nav-link text-white h4'
                    onClick={ chanceLenguaje}>{lenguaje} </p>
            

        </div>
 
    </>)
}

