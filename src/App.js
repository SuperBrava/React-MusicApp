import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import {Album1, Album2, Album3, Album4} from './pages/AlbumPage/Nickelback';

import Layout from "./layouts";
// import { TodoList, TodoForm } from './components';

function App() {
  // const [inputText, setInputText] = useState('');
  // const [submitValue, setSubmitValue] = useState('');
  // const [todos, setTodos] = useState([]);

  return (
  
    //Note: Check ending /> vs > for wrapping Routes
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/artists/" element={<ArtistsPage />}>
          <Route path=":artistId" element={<ArtistPage />}/>
          <Route path=":albumId" element={<AlbumPage />} />
        </Route>
      </Route>
    </Routes>
    
    // <div className="App">
    //   <header role="header">
    //     <h1>Nickleback Fan Page</h1>
    //   </header>
    //   <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setSubmitValue={setSubmitValue}/>
    //   <TodoList todos={todos} setTodos={setTodos}/>
    // </div>
  );
}

export default App;
