import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'


function Todolist() {
    const [todos,setTodos] = useState ([])

    const addTask = todo => {
        const newTask = [todo, ...todos]

        setTodos (newTask)
        console.log(...todos)
    };

    const removeTask = id => {
const remove = [...todos].filter(todo => todo.id !==id)
setTodos(remove);
}

const modifyTask = (taskId, modifiedTask) => {

    setTodos(previous => previous.map(item =>(item.id=== taskId ? modifiedTask : item)))
}


    const completeTask = id => {
        let doneTasks = todos.map (todo => {
           if (todo.id === id ) {
               todo.isDone = !todo.isDone
           }
           return todo
        })
        setTodos(doneTasks);
    }



    return (
        <div>
            <h1>Do it, just do it !</h1>
            <Form onSubmit = {addTask} />
            <Todo
            todos ={todos}
            completeTask ={completeTask}
            removeTask={removeTask}
            modifyTask ={modifyTask}

            />
        </div>
    )
}

export default Todolist
