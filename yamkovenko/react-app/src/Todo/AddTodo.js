import React, { useState } from "react";
import propTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      // setValue("");
    }
  }

  return (
    <form className='fromTodo'
      
      onSubmit={submitHandler}
    >
      <input
        {...input.bind}
        className='inputTodo'
        placeholder='Name...'
        
      ></input>
      <button type="submit" className='buttonTodo'>
        Add todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: propTypes.func.isRequired,
};

export default AddTodo;
