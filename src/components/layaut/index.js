import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckedContext from "../checkedContex";

export default function MenuApp() {
  let {
    trueList,
    trueListIT,
    inicialContent,
    setIdioma,
    lenguaje,
    setLenguaje,
  } = useContext(CheckedContext);

  function chanceLenguaje() {
    setLenguaje(lenguaje === "ES" ? "IT" : "ES");
    lenguaje === "ES"
      ? localStorage.setItem("app_bible_lang", JSON.stringify("IT"))
      : localStorage.setItem("app_bible_lang", JSON.stringify("ES"));
    setIdioma(lenguaje === "ES" ? inicialContent.it : inicialContent.es);
  }

  const divStyle = {
    backgroundColor: "#590696",
  };
  return (
    <>
      <div style={divStyle} className="nav justify-content-center fixed-top   ">
        <li className="nav-item dropdown">
            <p className="nav-link dropdown-toggle h4 text-white" 
                data-bs-toggle="dropdown"   
                role="button" 
                aria-expanded="false">
                {lenguaje === "ES" ? "Programa" : "Programma"}
            </p>
            <ul className="dropdown-menu ">
            <li>
                <Link className="nav-link  h4" to="/">
                    {lenguaje === "ES" ? "Biblia" : "Bibbia"}
                </Link>
            </li>
            <li>
                <Link className="nav-link  h4" to="/conmemoracion">
                        {lenguaje === "ES" ? "Conmemoración" : "Commemorazione"}
                </Link>    
            </li>
            </ul>
        </li>
 
        <Link className="nav-link text-white h4" to="/">
          {lenguaje === "ES" ? trueList : trueListIT}%{" "}
        </Link>
        <p className="nav-link text-white h4" onClick={chanceLenguaje}>
          {lenguaje}
        </p>
      </div>
    </>
  );
}
