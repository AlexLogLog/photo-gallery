import React from 'react';
import { useHistory } from 'react-router-dom';

function Album(props) {
    const {
        album,
        buttonOpenAlbum,
        photos
    } = props;
    const history = useHistory();
    function openAlbum() {
        buttonOpenAlbum(album);
        history.push('/photo-gallery/photos')
        window.scrollTo(0, 0);

    }
    const img = photos[0].thumbnailUrl;
    return (
        <div className='album' onClick={openAlbum}>
            <img className='album__img' src={`${img}`} alt='zz' />
            <p className="album__name">{album.title}</p>
            <p className="album__name">Count: {photos.length}</p>
        </div>
    )
}

export default Album;