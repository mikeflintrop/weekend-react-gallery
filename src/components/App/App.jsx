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

  // like PUT request
  const likedPic = (id) => {
    axios.put(
    `/gallery/like/${id}`
    ).then((response) => {
    getGallery();
    console.log('Pic is liked ID:', id);
    }).catch(function(error){
    alert('Something went wrong in the PUT /gallery :(')
    })
  };

  const [isHidden, setIsHidden] = useState(false);
  //function to flip pics
  const handlePicFlip = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h4>SPORTSBALL!!!</h4>

        <div>
          {galleryList.map((galleryItem) => {
          return (<div key={galleryItem.id}> 
            {isHidden ? (
              <p onClick={handlePicFlip}>{galleryItem.description}</p>
              ) : (
              <img onClick={handlePicFlip} src={galleryItem.path}/>
            )}
            <br></br>
            <button data-id = {galleryItem.id} className = "like button" onClick={() => likedPic(galleryItem.id)}>Like!</button> 
          </div>)
          
          })}
        </div>

      </div>
    );
}

export default App;
