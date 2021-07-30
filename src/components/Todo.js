import React, {useState} from 'react'
import Form from './Form'
import Todolist from './Todolist'
import {CgCloseR} from 'react-icons/cg'
import {BiEdit} from 'react-icons/bi'


function Todo({todos, completeTask, removeTask, updatedTask}) {

    const [modify, setModify] = useState({
        id : null,
        value: ''
    });  

const updateTask = value => {
updatedTask (modify.id, value)
setModify({
    id: null,
    value: ''
})
}

if(modify.id) {
    return <Form modify={modify} onSubmit ={updateTask} />
}

    return todos.map((todo, index) => (
<div className ={todo.isComplete ? 'todo-row complete' : 'todo-row'}
key={index}>

<div key= {todo.id} onClick={()=> completeTask(todo.id)}>
    {todo.text}
</div>

<div className ="icons">
    <CgCloseR 
    onClick = {() => removeTask(todo.id)}
    className ='delete'
    />
    <BiEdit 
      onClick = {() => setModify({id: todo.id, value: todo.text})}
      className ='edit'
    />
</div>

</div>
    ))
}

export default Todo
