import { createContext, useEffect, useState } from "react"

const CheckedContext = createContext()

export function CheckedContextComponent({children}){

    let [checkedList, setCheckedList] = useState([])
    let [trueList, setTrueList]= useState(0)
    useEffect(()=>{
        let checked = JSON.parse(localStorage.getItem('checked')) || []
        setCheckedList(checked)
        setTrueList(((checked.filter(e => e=== true).length)*100/365).toFixed(2))
    }, [])
    let data= {checkedList, setCheckedList, trueList, setTrueList}
    return (<>
        <CheckedContext.Provider value={data}>
            {children}
        </CheckedContext.Provider>
    </>)
}

export default CheckedContext