import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { ToDo } from './model';

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<ToDo[]>([]);
  console.log(toDo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo('');
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <TodoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
