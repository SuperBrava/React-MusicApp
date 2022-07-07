import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import {AlbumProvider} from './components/ArtistContext'
import { useSelector, useDispatch } from 'react-redux';
import { addAlbum, editAlbum, removeAlbum, addArtist, editArtist, removeArtist } from './store/actions'
import Body from './layouts/Body';
import './App.css';



import Layout from "./layouts";

function App() {
  // const [inputText, setInputText] = useState('');
  // const [submitValue, setSubmitValue] = useState('');
  // const [todos, setTodos] = useState([]);
  const album = useSelector(state => state.albumReducer)

  const dispatch = useDispatch();

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
