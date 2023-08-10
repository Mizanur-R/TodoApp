import shortid from 'shortid'
import { useState } from 'react'
import TaskList from './Component/TaskList'
import CreateTodo from './Component/CreateTodo'

const initialTodos = [
  {
    id: shortid.generate(),
    text: 'Mizanur Rahman',
    checked: true
  },
  {
    id: shortid.generate(),
    text: 'React JS',
    checked: false
  },
  {
    id: shortid.generate(),
    text: 'Fronend',
    checked: false
  }
]

function App() {

  const [todos, setTodos] = useState(initialTodos)

  const handleChange = (nextTodo) => {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo
      } else {
        return t
      }
    })) 
  }

  const handleDelete = todoId => {
    setTodos(
      todos.filter(t => t.id !== todoId)
    )
  }

  const handleOnAddTodo = (text) => {
    setTodos([
      {
        id: shortid.generate(),
        text,
        checked: false
      },
      ...todos,
      
    ])
  }

  return (
    <div className='todos'>
      <CreateTodo
        onAddTodo={handleOnAddTodo}
      />
      <TaskList
        todos={todos}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App;