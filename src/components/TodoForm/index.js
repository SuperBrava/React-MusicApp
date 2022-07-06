import React from 'react'

function TodoForm({inputText, setInputText, todos, setTodos}) {
  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000}
    ])
    setInputText('');
  }

  function handleStatus(e) {
      console.log(e.target.value);
  }

  return (
    <form>
        <label htmlFor='todo'>Todo</label>
        <input id="todo" name="todo" value={inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={handleSubmit} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={handleStatus} name="todos" className='filter-todo'>
            <option value="all">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
    </form>
  )
}

export default TodoForm;

