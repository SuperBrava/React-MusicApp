import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import {IndexPage, ArtistPage, ArtistsPage, AlbumPage} from './pages/';
import {AlbumProvider} from './components/ArtistContext'

import Layout from "./layouts";
// import { TodoList, TodoForm } from './components';

function App() {
  // const [inputText, setInputText] = useState('');
  // const [submitValue, setSubmitValue] = useState('');
  // const [todos, setTodos] = useState([]);

  return (
  <AlbumProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/artists/" element={<ArtistsPage />}>
          <Route path=":artistId" element={<ArtistPage />}/>
          <Route path=":albumId" element={<AlbumPage />} />
        </Route>
      </Route>
    </Routes>


    </AlbumProvider>
    
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
