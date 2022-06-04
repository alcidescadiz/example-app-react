export default function CheckBox({type, checked, className, name}){
    return (
        <input  
            type= {type} 
            checked = {checked}  
            className={className} 
            name={name} 
        />
    )
}