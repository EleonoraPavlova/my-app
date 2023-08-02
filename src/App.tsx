import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { ButtonComponent } from "./Button";


type PropsType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<PropsType[]>([])

  const mappedTodos = todos.map((el: PropsType) => {
    return (
      <li key={el.id}>
        <span>{el.id} - </span>
        <span>{el.title}</span>
        <span>{el.completed}</span>
      </li>
    )
  })

  const dataRequest = async () => {
    try {
      //реакция на изменение состояния в cтейта! например получение инпута побуквенно
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setTodos(res.data)
    } catch (e: any) {
      throw new Error(`Failed to do something.Reason: ${e.message}`);
    }
  };

  useEffect(() => {
    console.log("dataRequest");
    dataRequest()
  }, []);

  const onClickHandler = () => {
    console.log("clean");
    setTodos([])
  };


  return (
    <div className="App">
      <div>
        <ButtonComponent additionalClass="green" name="Clean posts" callBack={onClickHandler} />
        <ButtonComponent additionalClass="gray" name="Repeat data" callBack={dataRequest} />
      </div>
      <ul>
        {mappedTodos}
      </ul>
    </div>
  );
}
export default App;


