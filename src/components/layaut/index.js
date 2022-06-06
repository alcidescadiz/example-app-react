import { Link } from "react-router-dom";


export default function MenuApp(){
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="nav justify-content-center fixed-top   ">

                <Link className='nav-link text-white h4'  to='/' >Programa</Link>
                <Link className='nav-link text-white h4' to='/conmemoracion' >Conmemoración</Link>

        </div>
        
 
    </>)
}