import React from 'react'

function TodoItem({todo, todos, setTodos}) {

  //Removed handleDelete

  function handleComplete() {
    setTodos(todos.map((el) => {
        if(el.id === todo.id) {
            return {
                ...el, completed: !el.completed
            }
        } 

        return el;
    }))
  }
 
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
        <button onClick={handleComplete} className='complete-btn'><i className='fas fa-check'></i></button>
        
    </div>
  )
}

export default TodoItem;