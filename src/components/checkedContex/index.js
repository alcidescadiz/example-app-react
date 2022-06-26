import { createContext, useEffect, useState } from "react";
import { biblia, detalles, commemoracion, titulos } from "../../data";
import {
  biblia as bibbia,
  detalles as detagli,
  commemoracion as commemorazione,
  titulos as titoli,
} from "../../dataIT";

const CheckedContext = createContext();

const inicialContent = {
  es: {
    biblia: biblia,
    detalles: detalles,
    commemoracion: commemoracion,
    titulos: titulos,
  },
  it: {
    biblia: bibbia,
    detalles: detagli,
    commemoracion: commemorazione,
    titulos: titoli,
  },
};

export function CheckedContextComponent({ children }) {
  let [idioma, setIdioma] = useState(inicialContent.es);
  let [checkedList, setCheckedList] = useState([]);
  let [trueList, setTrueList] = useState(0);
  let [checkedListIT, setCheckedListIT] = useState([]);
  let [trueListIT, setTrueListIT] = useState(0);
  let [lenguaje, setLenguaje]=useState('ES')
  useEffect(() => {
    let lang = JSON.parse(localStorage.getItem("app_bible_lang")) || 'ES';
    setLenguaje(lang)
    let checked = JSON.parse(localStorage.getItem("checked")) || [];
    let checkedIT = JSON.parse(localStorage.getItem("checkedIT")) || [];
    setCheckedList(checked);
    setCheckedListIT(checkedIT);
    setTrueList(
      ((checked.filter((e) => e === true).length * 100) / 365).toFixed(2)
    );
    setTrueListIT(
      ((checkedIT.filter((e) => e === true).length * 100) / 365).toFixed(2)
    );
  }, []);
  let data = {
    checkedList,
    checkedListIT,
    setCheckedList,
    setCheckedListIT,
    trueList,
    setTrueList,
    trueListIT, 
    setTrueListIT,
    inicialContent,
    idioma,
    setIdioma,
    lenguaje, 
    setLenguaje
  };
  return (
    <>
      <CheckedContext.Provider value={data}>{children}</CheckedContext.Provider>
    </>
  );
}

export default CheckedContext;
