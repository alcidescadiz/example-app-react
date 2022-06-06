import { Link } from "react-router-dom";


export default function MenuApp(){
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="fluid fixed-top row  text-center ">
           <Link className='nav-link text-white col-6  h3' to='/' >Programa</Link>
           <Link className='nav-link text-white col-6  h3' to='/conmemoracion' >Conmemoración</Link>
        </div>
 
    </>)
}