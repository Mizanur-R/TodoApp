
import { useState } from "react";

function CreateTodo({onAddTodo}) {
    const [text, setText] = useState('')
    let isDisable = true
    return (
        <>
            <input
            placeholder="Add New Task"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                
            />
            <button onClick={() => {
                
                onAddTodo(text)
                setText('')
            }} disabled={text ? false : true}>
                Add Task
            </button>
        </>
    )
}

export default CreateTodo;