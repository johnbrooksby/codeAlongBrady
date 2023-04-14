import React, {useState} from "react";

const Form = (props) => {
  const[userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(userInput)
    props.userInput('')
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input value={userInput} onChange={handleChange}></input>
      <button>Add Task</button>
    </form>
  );
};

export default Form;
