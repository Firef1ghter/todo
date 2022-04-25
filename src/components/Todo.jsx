import {useState} from "react";
import {TodoInput} from "./TodoInput";
import{TodoItem} from "./TodoItem";
import { nanoid } from 'nanoid'

export const Todo=()=>{
    const[todos,setTodos] = useState([]);
    const addTodo=(data)=>{
        const t = {
           
            title:data,
            id:nanoid(),
            status:false,
        };
        setTodos([...todos,t]);
    }

    const handleDelete=(id)=>{
        const deleteTodo = todos.filter((el)=>el.id==id)
        setTodos(deleteTodo);
    }
    const handleToggle =(id)=>{
       // alert(id);
       const updatedTodo = todos.map((el)=>el.id ==id ?{...el, status: !el.status} :el)

       setTodos(updatedTodo);
    }
   return (
      <div>
            <TodoInput handleAdd={addTodo}/>
            {todos.map((el)=>(<TodoItem handleToggle={handleToggle} handleDelete={handleDelete} todo={el} id={el.id} key={el.id}/>))}
    
      </div>
     
   )
}