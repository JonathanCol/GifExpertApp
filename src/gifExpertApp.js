import React, {useState} from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    //const categories = ["One Punch", "Samurai X"," Dragon Ball"];
    const [categories, setCategories] = useState(["One Punch", "Samurai X"," Dragon Ball"])
    //const handleApp = () => {
    //    
    //    setCategories([...categories, "Vegeta"]);
    //    
    //    
    //}
  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories()} />
        <hr />
        <button >Agregar</button>
        <ol>
            {
                categories.map( (category) =>{
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </div>
  )
}

export default GifExpertApp