import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckedContext from "../checkedContex";

export default function MenuApp(){
    let {trueList} = useContext(CheckedContext)
    
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="nav justify-content-center fixed-top   ">

                <Link 
                    className='nav-link text-white h4'  
                    to='/' > {trueList}% </Link>
                <Link 
                    className='nav-link text-white h4' 
                    to='/conmemoracion' >Conmemoración</Link>
            

        </div>
 
    </>)
}

