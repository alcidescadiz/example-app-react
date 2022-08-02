import { createContext, useEffect, useState } from "react";
import { detalles, titulos } from "../../data.js";
import {
  detalles as detagli,
  titulos as titoli,
} from "../../dataIT.js";

const CheckedContext = createContext();

const inicialContent = {
  es: {
    detalles: detalles,
    titulos: titulos,
  },
  it: {
    detalles: detagli,
    titulos: titoli,
  },
};

let texto = `
█▀▀▄ ─▀─ █▀▀ █▀▀▄ ▀█─█▀ █▀▀ █▀▀▄ ─▀─ █▀▀▄ █▀▀█ 
█▀▀▄ ▀█▀ █▀▀ █──█ ─█▄█─ █▀▀ █──█ ▀█▀ █──█ █──█ 
▀▀▀─ ▀▀▀ ▀▀▀ ▀──▀ ──▀── ▀▀▀ ▀──▀ ▀▀▀ ▀▀▀─ ▀▀▀▀
`
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
    console.log(texto)
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
    idioma, setIdioma,
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
