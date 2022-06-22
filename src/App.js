import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import SearchBar from './Components/SearchBar';
import AddSong from './Components/AddSong';

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

  function searchFilter(query) {
    let searchRequest = query
    let newArray = []
    for (let i = 0; i < songs.length; i++) {
      if(songs[i].title === searchRequest){
        newArray.push(songs[i]);
      }
      else if(songs[i].artist === searchRequest){
        newArray.push(songs[i]);
      }
      else if(songs[i].album === searchRequest){
        newArray.push(songs[i]);
      }
      else if(songs[i].genre === searchRequest){
        newArray.push(songs[i]);
      }
      else if(songs[i].release_date === searchRequest){
        newArray.push(songs[i]);
      }
    }
    setSongs(newArray)
  }

  // useEffect(() => {
  //   addNewSong();
  // }, [])

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  // async function addNewSong(newSong){
  //   try{
  //     let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
  //     .then((response) => {
  //       setSongs(response.data);
  //     });
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log('Error in making request');
  //   }
  // }

  return (
    <div>
      <header>
      </header>
      <div>
        <div>
          <SearchBar queryData={searchFilter}/>
        </div>
        <div>
          <DisplayMusic key={songs.id} musicData={songs}/>
        </div>
        <div>
          <AddSong addNewSong={addNewSong}/>
        </div>
      </div>
    </div>
  );
}

export default App;
