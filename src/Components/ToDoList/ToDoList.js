/*import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import todoTick from '../../assets/todoTick.png';
import './ToDoList.css';
import todoempty from '../../assets/emptybox3.jpg';

function ToDoList({ todos, formatDate, deleteTodo, editTodo }) {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeView, setActiveView] = useState('todo');
  const [category, setCategory] = useState('all');

  const toggleComplete = (index) => {
    setCompletedTodos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredTodos = activeView === 'todo'
    ? todos.filter((todo, index) => 
        !completedTodos.includes(index) &&
        (category === 'all' || todo.category === category)
      )
    : todos.filter((_, index) => completedTodos.includes(index));

  return (
    <div className='side-wrap'>
      <div className='head'>
        <p className={`head-line ${activeView === 'todo' ? 'active' : ''}`} onClick={() => handleViewChange('todo')}>To do</p>
        <p className={`head-line ${activeView === 'completed' ? 'active' : ''}`} onClick={() => handleViewChange('completed')}>Completed</p>
      </div>

      {activeView === 'todo' && (
        <div className='category-filter'>
          <button className={`category-button ${category === 'all' ? 'active' : ''}`} onClick={() => handleCategoryChange('all')}>All</button>
          <button className={`category-button ${category === 'personal' ? 'active' : ''}`} onClick={() => handleCategoryChange('personal')}>Personal</button>
          <button className={`category-button ${category === 'work' ? 'active' : ''}`} onClick={() => handleCategoryChange('work')}>Work</button>
        </div>
      )}

      <div className='wrap-item'>
        {filteredTodos.length === 0 ? (
          <div className='empty-div'>
            <img src={todoempty} alt="No items" className='empty-img' />
          </div>
        ) : (
          filteredTodos.map((todo, index) => {
            const originalIndex = todos.indexOf(todo);
            return (
              <div key={index} className={`todo-item ${completedTodos.includes(originalIndex) ? 'completed' : ''}`}>
                <div className='complete-circle'>
                  <div className='circle' onClick={() => toggleComplete(originalIndex)}>
                    {completedTodos.includes(originalIndex) && <img src={todoTick} alt="Completed" className='todo-tick' title='not completed' />}
                  </div>
                  <p className='date-li'>{formatDate(todo.date)}</p>
                </div>
                <p className='text-li'>{todo.text}</p>
                <div className='button-div'>
                  <div>
                    <button onClick={() => deleteTodo(originalIndex)} className='button-text' disabled={completedTodos.includes(originalIndex)}>
                      <i className={`fas fa-trash ${completedTodos.includes(originalIndex) ? 'completed-grey' : ''}`}></i>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => editTodo(originalIndex)} className='button-text' disabled={completedTodos.includes(originalIndex)}>
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ToDoList;
*/
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import todoTick from '../../assets/todoTick.png';
import './ToDoList.css';
import todoempty from '../../assets/emptybox3.jpg';

function ToDoList({ todos, formatDate, deleteTodo, editTodo }) {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeView, setActiveView] = useState('todo');
  const [category, setCategory] = useState('all');

  const toggleComplete = (index) => {
    setCompletedTodos((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredTodos = activeView === 'todo'
    ? todos.filter((todo, index) => 
        !completedTodos.includes(index) &&
        (category === 'all' || todo.category === category)
      )
    : todos.filter((_, index) => completedTodos.includes(index));

  return (
    <div className='side-wrap'>
      
      <div className='head'>
        <p className={`head-line ${activeView === 'todo' ? 'active' : ''}`} onClick={() => handleViewChange('todo')}>To do</p>
        <p className={`head-line ${activeView === 'completed' ? 'active' : ''}`} onClick={() => handleViewChange('completed')}>Completed</p>
      </div>

      {activeView === 'todo' && (
        <div className='category-filter'>
          <button className={`category-button ${category === 'all' ? 'active' : ''}`} onClick={() => handleCategoryChange('all')}>All</button>
          <button className={`category-button ${category === 'personal' ? 'active' : ''}`} onClick={() => handleCategoryChange('personal')}>Personal</button>
          <button className={`category-button ${category === 'work' ? 'active' : ''}`} onClick={() => handleCategoryChange('work')}>Work</button>
        </div>
      )}

      <div className='wrap-item'>
        {filteredTodos.length === 0 ? (
          <div className='empty-div'>
            <img src={todoempty} alt="No items" className='empty-img' />
          </div>
        ) : (
          filteredTodos.map((todo, index) => {
            const originalIndex = todos.indexOf(todo);
            return (
              <div key={index} className={`todo-item ${completedTodos.includes(originalIndex) ? 'completed' : ''}`}>
                <div className='complete-circle'>
                  <div className='circle' onClick={() => toggleComplete(originalIndex)}>
                    {completedTodos.includes(originalIndex) && <img src={todoTick} alt="Completed" className='todo-tick' title='not completed' />}
                  </div>
                  <p className='date-li'>{formatDate(todo.date)}</p>
                </div>
                <p className='text-li'>{todo.text}</p>
                <div className='button-div'>
                  <div>
                    <button onClick={() => deleteTodo(originalIndex)} className='button-text' disabled={completedTodos.includes(originalIndex)}>
                      <i className={`fas fa-trash ${completedTodos.includes(originalIndex) ? 'completed-grey' : ''}`}></i>
                    </button>
                  </div>
                  <div>
                    <button onClick={() => editTodo(originalIndex)} className='button-text' disabled={completedTodos.includes(originalIndex)}>
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ToDoList;
