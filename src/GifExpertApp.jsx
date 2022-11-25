import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['power rangers'])
  
    const onAddCategory = ( newCategory) =>{
        
        //Si el array categories incluye el nuevo elemento newCategory, salimos.
        if (categories.includes(newCategory)) return;
         //setCategories(['League of Legends',...categories ]);
        setCategories([newCategory, ...categories]);
    }    
    
    const limpiar = () =>{
        setCategories([]);
    }

    return (
        <>
            
            <h1>Búsqueda de Gifs</h1>

            <AddCategory onNewCategory={onAddCategory} />
            <button onClick={limpiar}>Limpiar</button>

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            )
            )}
            

        </>

    )
}
