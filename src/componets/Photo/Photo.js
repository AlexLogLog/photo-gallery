import React from 'react'

function Photo(props) {
    const {
        photo,
        photoClick
    } = props;

    function handleClick() {
        photoClick(photo);
    }

    return(
        <div className="photo">
            <img src={photo.url} alt={photo.title} onClick={handleClick}></img>
            {/* <p>{photo.title}</p> */}
        </div>
    )
}

export default Photo;
