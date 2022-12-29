import React, { useState } from 'react';
import { ToDo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: ToDo;
  todos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setToDos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.toDo);
  // const handleEdit = (id: number) => {
  //   setToDos();
  // };

  const handleDone = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

	const handleEdit=(e:React.FormEvent<HTMLFormElement>,id: number) =>{
		e.preventDefault();
		setToDos(todos)
	}

  return (
    <form action="" className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.toDo}</s>
      ) : (
        <span className="todos__single--text">{todo.toDo}</span>
      )}
      <span className="todos__single--text">{todo.toDo}</span>
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
