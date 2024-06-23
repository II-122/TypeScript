import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  let name = "REACT"

  return (
    <div className="container">
      <header className ="App-header">
        <TodoList></TodoList>
        <Clock></Clock>
        <MyWeather weather='맑음'>일기예보</MyWeather>
        <p>Welcome</p>
      </header>
      <br/>
      {/* 작성자 : [] */}
    </div>
  );
}

export default App;