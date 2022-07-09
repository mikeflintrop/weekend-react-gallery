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
    axios.get('/list')
    .then((response) => {
        console.log(response.data)
        setGalleryList( response.data )
    }).catch((error) => {
        console.log( 'error in GET', error)
    })
  };

  // update PUT request
  const likedPic = (id) => {
    
    axios.put(
    `/list/${id}`
    ).then((response) => {
    getGallery();
    console.log('Pic is liked:', id);
    }).catch(function(error){
    alert('Something went wrong in the PUT /list :(')
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/mnvikingslogo.png"/>
        <img src="images/mnwildlogo.jpeg"/>
        <img src="images/mntwinslogo.png"/>
        <img src="images/mntwolveslogo.jpeg"/>

      </div>
    );
}

export default App;
