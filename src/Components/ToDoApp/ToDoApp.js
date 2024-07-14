
import React, { useEffect, useState } from 'react';
import './ToDoApp.css';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';
import Header from '../Header/Header';

function ToDoApp() {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('all'); // Default category
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [alertMessage, setAlertMessage] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const filteredTodos = filterCategory === 'all' ? todos : todos.filter(todo => todo.category === filterCategory);

  const getOriginalIndex = (filteredIndex) => {
    const filteredTodo = filteredTodos[filteredIndex];
    return todos.findIndex(todo => todo === filteredTodo);
  };

  useEffect(() => {
    if (editIndex >= 0 && todos[editIndex]) {
      setDate(todos[editIndex].date);
      setText(todos[editIndex].text);
      setCategory(todos[editIndex].category);
    } else {
      setDate('');
      setText('');
      setCategory('personal');
    }
  }, [editIndex, todos]);

  const addOrUpdateTodo = () => {
    if (date && text && category) {
      const newTodo = { date, text, category };

      if (editIndex >= 0) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, newTodo]);
      }

      setDate('');
      setText('');
      setCategory('personal');
      setAlertMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !text || !category) {
      setAlertMessage('Please fill in the date, text, and category fields.');
      return;
    }
    addOrUpdateTodo();
  };

  const deleteTodo = (filteredIndex) => {
    const originalIndex = getOriginalIndex(filteredIndex);
    const updatedTodos = todos.filter((_, i) => i !== originalIndex);
    setTodos(updatedTodos);
  };

  const editTodo = (filteredIndex) => {
    const originalIndex = getOriginalIndex(filteredIndex);
    const todo = todos[originalIndex];

    setDate(todo.date);
    setText(todo.text);
    setCategory(todo.category);
    setEditIndex(originalIndex);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div>
     <Header/>
      <div className='todo-flex app'>
        <ToDoForm
          date={date}
          text={text}
          category={category}
          setDate={setDate}
          setText={setText}
          setCategory={setCategory}
          handleSubmit={handleSubmit}
          isEditing={editIndex}
          alertMessage={alertMessage}
        />
        <ToDoList
          todos={filteredTodos}
          formatDate={formatDate}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default ToDoApp;
