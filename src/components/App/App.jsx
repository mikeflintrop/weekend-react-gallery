import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  let [galleryList, setGalleryList] = useState([]);
  let [picLikes, setPicLikes] = useState('');

  useEffect(() => {
    getGallery()
  }, [])

  //Get request
  const getGallery = () => {
    axios.get('/gallery')
    .then((response) => {
        console.log('GET /gallery',response.data)
        setGalleryList( response.data )
    }).catch((error) => {
        console.log( 'error in GET /gallery', error)
    })
  };

  // update PUT request
  const likedPic = (id) => {
    
    axios.put(
    `/gallery/${id}`
    ).then((response) => {
    getGallery();
    console.log('Pic is liked:', id);
    }).catch(function(error){
    alert('Something went wrong in the PUT /gallery :(')
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h4>SPORTSBALL!!!</h4>

        <div>
          {galleryList.map((galleryItem) => {
          return (<h5 key={galleryItem.id}> <img src={galleryItem.path}/>
          <br></br>
              <>
                <button data-id = {galleryItem.id} className = "like button" onClick={() => likedPic(galleryItem.id)}>Like!</button> 
              </>
            </h5>)
          })}
        </div>

      </div>
    );
}

export default App;
