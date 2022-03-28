import React, { useState } from "react";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e,props) => {
        e.preventDefault();
        //console.log("Submit Hecho!");
       props.setCategories();
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    
  );
};

export default AddCategory;
