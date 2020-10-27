import React, { useState, useContext } from "react";
import AppTheme from "../Colours";
import ThemeContext from "../ThemeContext";

function Form(props) {

    const [name, setName] = useState('');

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '') {
            props.addTask(name)};
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
      style = {{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        borderColor: `${currentTheme.borderColor}`
    }}
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button 
      style = {{
        backgroundColor: `${currentTheme.saveColor}`,
        borderColor: `${currentTheme.borderColor}`
      }}
      type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;