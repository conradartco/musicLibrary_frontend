import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';

function App() {

  // async activity
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // forces a re-render when 'songs' content changes
    getAllSongs();
  }, [])

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/music/');
      // response.data has all the necessary data
      setSongs(response.data)
      console.log(response.data)
    } catch (err) {
      console.log('Error in making request');
    }
  }

  return (
    <div>
      <header>
      </header>
      <div>
        <DisplayMusic musicData={songs}/>
      </div>
    </div>
  );
}

export default App;
