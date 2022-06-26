import { useContext } from "react";
import CheckedContext from "../checkedContex";

export default function Pie(){
    let { idioma } = useContext(CheckedContext);
    return (<>
        <div className="container  text-center  my-5" >
            <h3 className="tex-center"><b>{idioma.titulos.pie.fuente}</b></h3>
            <p className="tex-center">
                {idioma.titulos.pie.version}
            </p>
            <p>{idioma.titulos.pie.videos}</p>
            <a className="tex-center" href={idioma.titulos.pie.jw} target={"_blank" } rel="noreferrer">
                {idioma.titulos.pie.jw}</a>
            <br></br>
            <a className="tex-center"  href={idioma.titulos.pie.wol} target={"_blank"} rel="noreferrer" >
                {idioma.titulos.pie.biblioteca}
            </a>
        </div>
    </>)
}