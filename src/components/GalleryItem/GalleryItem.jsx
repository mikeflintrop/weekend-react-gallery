import React, {useState} from 'react';
import axios from "axios";


function GalleryItem({ galleryItem, getGallery}) {

    const [isHidden, setIsHidden] = useState(false);

    // flip pics function
    const handlePicFlip = () => {
        if (isHidden) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    };

    // like PUT request
    const likedPic = (id) => {
        axios.put(
        `/gallery/like/${id}`
        ).then((response) => {
            getGallery();
            // console.log(response)
            console.log('Pic is liked ID:', id);
        }).catch((error) => {
            alert('Something went wrong in the PUT /gallery :(')
        })
    };

    return (
        <div>
            {isHidden ? (
                <h4 onClick={handlePicFlip}>{galleryItem.description}</h4>
                ) : (
                <img onClick={handlePicFlip} src={galleryItem.path}/>
            )}
            <br></br>
            <button data-id = {galleryItem.id} className = "like button" onClick={() => likedPic(galleryItem.id)}>Like!</button> 
            <p>{galleryItem.likes} Likes</p>
        </div>
    )
};

export default GalleryItem;