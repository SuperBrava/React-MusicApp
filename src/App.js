import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Body from './layouts/Body';
import {AlbumProvider} from './components/ArtistContext'

import Layout from "./layouts";

function App() {
  // const [inputText, setInputText] = useState('');
  // const [submitValue, setSubmitValue] = useState('');
  // const [todos, setTodos] = useState([]);

  return (
  <AlbumProvider>

      {/* {<Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/artists/" element={<Body />} /> */}
            {/* <Route path=":artistId" element={<ArtistPage />}/>
            <Route path=":albumId" element={<AlbumPage />} />*/}
          {/* </Route> */}
      {/* </Routes>} */}
      <Body />
      {/* <Layout /> */}

    </AlbumProvider>
  )
};

export default App;
