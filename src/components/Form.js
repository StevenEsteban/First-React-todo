import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
const [input, setInput] = useState ('');


const Refs = useRef(null)

useEffect(() =>{
    Refs.current.focus()
})

const handleChange = s => {
   setInput(s.target.value);
}

const submit = s => {
s.preventDefault();

props.onSubmit({
    id: Math.floor(Math.random() * 1000000),
    text: input
});

setInput('');
};




    return (
     <form className= "todoForm" onSubmit={submit} >
         <input type="text" className="todoInput" name="text" placeholder ="Add a task here" value={input} onChange={handleChange} ref={Refs} />
         <button className="addButton">Add to list</button>
     </form>
    )
}

export default Form
