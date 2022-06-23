import React, { useState } from 'react';
import './Components.css'

const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: date
        }
        props.addNewSong(newSong);
    }

    return ( 
       <form onSubmit={handleSubmit}>
           <div>
               {/* <label>Title</label> */}
               <input type='text' value={title} placeholder='Title' className='form-field' onChange={(event) => setTitle(event.target.value)}/>
           </div>
           <div>
               {/* <label>Artist</label> */}
               <input type='text' value={artist} placeholder='Artist' className='form-field' onChange={(event) => setArtist(event.target.value)}/>
           </div>
           <div>
               {/* <label>Album</label> */}
               <input type='text' value={album} placeholder='Album' className='form-field' onChange={(event) => setAlbum(event.target.value)}/>
           </div>
           <div>
               {/* <label>Genre</label> */}
               <input type='text' value={genre} placeholder='Genre' className='form-field' onChange={(event) => setGenre(event.target.value)}/>
           </div>
           <div>
               {/* <label>Release Date</label> */}
               <input type='date' value={date} className='form-field' onChange={(event) => setDate(event.target.value)}/>
           </div>
           <div className='button-container'>
               <button type='submit' className='add-song-button'>ADD SONG</button>
           </div>
       </form>
     );
}

export default AddSong;