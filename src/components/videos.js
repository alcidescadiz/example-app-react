import { Link, useParams } from "react-router-dom";
import { biblia } from "../data";


export default function Videos(){
    let { id } = useParams();
    
    return (<>
            <div className="mt-5"></div>
            <div className="container">
                <div className=" my-2">
                    <Link className='navbar-brand' to='/' >Volver</Link>
                </div>
                <div className="" id="video" >
                    { typeof biblia[id].video === 'string' ? 
                    <video  
                        width={'100%'}
                        className="videos m-auto" 
                        controls src={biblia[id].video}  ></video>:
                    biblia[id].video.map(e=> <> <video key={e} className="videos" controls src={e}  ></video></> )}
                    
                </div>
                <div className=" my-2">
                    <Link className='navbar-brand' to='/' >Volver</Link>
                </div>
            </div>
    </>)
}