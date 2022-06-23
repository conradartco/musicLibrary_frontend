import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';
import AddSong from './Components/AddSong';
import NavBar from './Components/NavBar'
import './Components/Components.css';

function App() {

  // async activity
  const [songs, setSongs] = useState([]);
  // const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    // forces a re-render when 'songs' content changes
    getAllSongs();
  },[])

  // useEffect(() => {
  //   // force a rerender
  //   // The brackets are the triggers to cause the useEfect to execute
  // }, [loadData])


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

  function searchFilter(query) {
    let newArray = []
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].title.toLowerCase().includes(query) ||
          songs[i].artist.toLowerCase().includes(query) ||
          songs[i].album.toLowerCase().includes(query) ||
          songs[i].genre.toLowerCase().includes(query) ||
          songs[i].release_date.includes(query)){
            newArray.push(songs[i]);
          }
      }
    setSongs(newArray)
    // setLoadData(!loadData)
  }

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return (
    <div >
      <header className='nav-style'>
        <NavBar />
      </header>
      <div className='app-style'>
        <div>
          <SearchBar queryData={searchFilter}/>
        </div>
        <div className='container'>
          <DisplayMusic key={songs.id} musicData={songs}/>
        </div>
        <div className='new-song-form'>
          <AddSong addNewSong={addNewSong}/>
        </div>
      </div>
    </div>
  );
}

export default App;
