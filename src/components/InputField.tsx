import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <div>
      <form className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="input__box"
          placeholder="enter a task"
        />
        <button type="submit" className="input_submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
