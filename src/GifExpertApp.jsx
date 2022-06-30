import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = ( newCategory ) => {

        // Forma 1
        // setCategories([...categories, 'Valorant']);
       
        // Forma 2
        // setCategories( cat => [ ...categories, 'Valorant'] );

        // Validar que no ingrese nuevo valor si acaso ya existe
        // if( categories.includes( newCategory )) return;

        // Se podria ser mas estricto y validar llevando antes todo a lowercase y despues comparar
        const lowerCat = categories.map(element => {return element.toLowerCase(); });
        if (lowerCat.includes( newCategory.toLowerCase() )) return;
  
        // Generico por parametro y empujando hacia abajo los valores antiguos
        setCategories([ newCategory, ...categories ]);

    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { (event) => onAddCategory(event) }
            />

            {/* <button onClitck={ onAddCategory } className="button">Agregar</button> */}

                { categories.map( category => ( <GifGrid 
                key={ category }
                category = { category }
                /> ))}

        </>
    )
}
