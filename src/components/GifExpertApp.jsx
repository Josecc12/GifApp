import React, { useState } from 'react';
import { AddCategory , GifGrid } from './index';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (category) => {

    if (categories.includes(category)) return;

    if (category.trim().length <= 1) return;
    const newCategories = [category.trim(), ...categories];
    setCategories(newCategories);

  };

  return (
    <>
  
      <h1>GifExpertApp</h1>


   
      <AddCategory onAddCategory={onAddCategory} />


        {
          categories.map(category => {
            return( 
             <GifGrid key={category} category={category}/>
            )

          })
        }
     
    </>
  );
};
