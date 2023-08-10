import { useState } from "react"
import '../index.css'

const SingleTask = ({ todo, onChange, onDelete }) => {
    const [isEditeing, setIsEditing] = useState(false)

    let todoContent = isEditeing ? (
        <>
            <input
                type="text"
                value={todo.text}
                onChange={e => onChange({
                    ...todo,
                    text: e.target.value
                })}
            />
            <button onClick={() => setIsEditing(false)} className="btn-success">
                Save
            </button>
        </>
    ) : (
        <>
           <span> {todo.text}</span>
            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
        </>
    )

    return (
        <>
            <input
                type="checkbox"
                checked={todo.checked}
                onChange={e => onChange({
                    ...todo,
                    checked: e.target.checked
                })}
            />
            <span className="pSpan">
            {todoContent}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
            >
                Delete
            </button>
        </ >
    )
}

function TaskList({todos, handleChange, handleDelete}) {
    return (
        <div className="app">
            {
                todos.length > 0 ? (
                    todos.map(todo => (
                        <li key={todo.id}>
                        <SingleTask 
                            todo={todo}
                            onChange={handleChange}
                            onDelete={handleDelete}
                        />
                    </li>
                    ))
                ): (
                    <div style={{width: '300px', height: 'auto'}}>
                        <img width={'100%'} src="https://i.pinimg.com/originals/77/17/fb/7717fbf1f4ea5676ab6c118cb2552a8f.png" alt="" />
                    </div>
                )
            }
        </div>
    )
}

export default TaskList;