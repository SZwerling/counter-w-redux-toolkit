import { produceWithPatches } from 'immer';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //to call from reducer
import { selectSong } from './counter'; //import the actions from the reducer


const App = () => {
    const { count, mySongs, selectedSong } = useSelector(state => state.counter) //destructure the count var from the counter reducer
    const dispatch = useDispatch()
    
    console.log(selectedSong)
    
    const listOfSongs = mySongs.map((song) => {
            return(
                <li onClick={() => dispatch(selectSong(song))} key={song.title}>{song.title}</li>
            )
    })

   
   
    return(
       
        <div className="app">
            <h1>The count is: {count}</h1>
            <ul>{listOfSongs}</ul>
            <div>{selectedSong.payload.title}</div>
            
        </div>
    )
}


export default App;