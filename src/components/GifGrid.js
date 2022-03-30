import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async() => {

        const url = "https://pokeapi.co/api/v2/pokemon/1";
        
        const resp = await fetch( url );

        const { abilities } = await resp.json();

        console.log(abilities);



    }
    
    getGifs();




  return (
    <div>
        <h3> { category } </h3>
    </div>
  )
}
