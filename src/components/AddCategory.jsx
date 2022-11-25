import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        //Control de errores en input
        if( inputValue.trim().length <=1) return;  //si limpiamos espacios y es <=1 entonces salimos
        
        onNewCategory(inputValue.trim().toLowerCase());
        setInputValue('');  //Limpiamos la caja despues de disparar Submit
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
