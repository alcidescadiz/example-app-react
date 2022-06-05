import { Link } from "react-router-dom";


export default function MenuApp(){
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="fluid fixed-top   text-center p-2 ">
           <Link className='navbar-brand mx-3 text-center w-100 text-white col h1' to='/' >Programa</Link>
           <Link className='navbar-brand mx-3 text-white col w-100 h1' to='/conmemoracion' >Conmemoración</Link>
        </div>
 
    </>)
}