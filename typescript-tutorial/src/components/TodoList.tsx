import React from 'react';
import { ToDo } from '../model';
import SingleTodo from './SingleTodo';
interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const TodoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="todos">
      {toDos.map((todo) => (
        <SingleTodo todo={todo} todos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default TodoList;
