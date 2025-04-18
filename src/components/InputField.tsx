import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
        className="input"
      >
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
