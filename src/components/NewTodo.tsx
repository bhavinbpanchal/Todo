import { useContext, useState } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const [inputValue, setInputValue] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      // throw an error
      return alert("Please write something");
    }

    todosCtx.addTodo(inputValue);
    setInputValue("");
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input
        type="text"
        id="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
