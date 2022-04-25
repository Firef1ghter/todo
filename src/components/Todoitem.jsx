export const TodoItem=({todo,handleToggle,handleDelete})=>{

    
    return <div>
        <h3> {todo.title}</h3>
    <button onClick={()=>{
    handleToggle(todo.id)
    }}>{todo.status ? "true":"false"}</button>

    <button onClick={()=>{
        handleDelete(todo.id)
    }}>Delete</button>
    </div>
        
    
   // {todo.status ? "Done" :"not done"}    
    
}