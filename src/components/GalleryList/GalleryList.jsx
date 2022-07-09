import React, {useState} from 'react';
import axios from "axios";

import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ galleryList, getGallery }) {

    return (
        <div>
        {galleryList.map((galleryItem) => {
        return (
        <GalleryItem
            key={galleryItem.id}
            galleryItem={galleryItem}
            getGallery={getGallery}
            />
            );
        })}
        </div>
    );
}

export default GalleryList;