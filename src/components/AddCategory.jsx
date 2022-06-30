
import React, { useState } from 'react';
import { GifExpertApp } from '../GifExpertApp';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( ( categories ) => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

  return (
    <form onSubmit={ onSubmit }>

    <input 
    onChange={ onInputChange }
    placeholder="Buscar GIFs"
    type="text"
    value = { inputValue }
    
    />
    </form>
  )
}
