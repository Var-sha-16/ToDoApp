/*import React, { useState } from 'react'
import './ToDoForm.css'
import AllTodoPicture from '../../assets/AllTodoPicture.jpg'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ToDoForm({ date, text, setDate, setText, handleSubmit, isEditing, alertMessage,category,setCategory}) {
  
  return (
    <div className='wrap-form'>
       
    <div className='inputs'>
    <div className="date-input-wrapper">
      <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="Click to select a date"
          className="calendar-input"
          customInput={
            <div className="custom-input-container">
              <i className="fas fa-calendar-alt calendar-icon"></i>

              <input className="date-input" />
            </div>
          }
          popperClassName="custom-popper"
          calendarClassName="custom-calendar"
        />
      </div>
      <input 
        type="text" 
        placeholder="Enter your task" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
       <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        
      </select>
     <button className='button-add' onClick={handleSubmit}>{isEditing >= 0 ? 'Update' : 'Add'}</button>
   
   </div>
   {alertMessage && <div className="alert">{alertMessage}</div>}
   
  <div className='Allimage'> <img src={AllTodoPicture} /> </div> 
    </div>
  )
}

export default ToDoForm
*/

import React, { useState } from 'react';
import Select from 'react-select';
import './ToDoForm.css';
import AllTodoPicture from '../../assets/AllTodoPicture.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const options = [
  { value: 'personal', label: 'Personal' },
  { value: 'work', label: 'Work' },
];

function ToDoForm({ date, text, setDate, setText, handleSubmit, isEditing, alertMessage, category, setCategory }) {
  return (
    <div className='wrap-form'>
      <div className='inputs'>
       
         <div className='select-div'>
          <Select 
          value={options.find(option => option.value === category)}
          onChange={(selectedOption) => setCategory(selectedOption.value)}
          options={options}
          className="custom-select"
          styles={customSelectStyles}
        />
        </div>
      <div className='flex-no'>
        <input 
          type="text" 
          placeholder="Enter your task" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
         <div className="date-input-wrapper">
         <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="Click to select a date"
            className="calendar-input"
            customInput={
              <div className="custom-input-container">
                <i className="fas fa-calendar-alt calendar-icon"></i>
                <input className="date-input" />
              </div>
            }
            popperClassName="custom-popper"
            calendarClassName="custom-calendar"
          />
          </div>
        <button className='button-add' onClick={handleSubmit}>{isEditing >= 0 ? 'Update' : 'Add'}</button>
      </div>
      {alertMessage && <div className="alert">{alertMessage}</div>}
      </div>
      <div className='Allimage'>
        <img src={AllTodoPicture} alt="All Todo" />
      </div>
    </div>
    
  );
}

export default ToDoForm;

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#f0f8ff',
   
    borderRadius: '4px',
    padding: '2px',
    fontSize: '16px',
    color:'#4892ca'
   
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#f0f8ff',
    borderRadius: '4px',
    borderColor: '#007bff',
    marginTop: '0',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#4892ca' : state.isFocused ? '#f0f8ff' : '#fff',
    color: state.isSelected ? '#fff' : '#333',
    padding: '10px',
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#4892ca',
  }),
  placeholder: (provided) => ({
    ...provided,
    color:'#4892ca',
  }),
};
