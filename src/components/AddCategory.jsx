import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('One punchs');

    const onInpuntChange = ({target}) =>{
        setinputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }

    return (
        <form onSubmit={(event)=>onSubmit(event)}>
            <input
            type='text'
            placeholder='buscar gifs'
            value={inputValue}
            onChange={(event)=>onInpuntChange(event) }
        />
        </form>
    )
}
