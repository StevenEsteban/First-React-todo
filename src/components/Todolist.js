import React, {useState, useEffect} from 'react'
import Form from './Form'
import Todo from './Todo'

const LSKEY = "TodoBrowser"

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

const modifyTask = (taskId, newValue) => {

    setTodos(prev => prev.map(item =>(item.id=== taskId ? newValue : item)))
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

    

    // useEffect(() => {
    //     window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    // }, [todos]);

    // const data = JSON.stringify(localStorage.getItem('data'))


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
