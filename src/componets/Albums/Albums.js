import React from 'react';
import Album from '../Album/Album';

function Albums(props) {
    const {
        albums,
        buttonOpenAlbum,
        photos
    } = props;
    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <Album album={album} buttonOpenAlbum={buttonOpenAlbum} photos={photos.filter((photo) => photo.albumId === album.id)} key={album.id}/>
                )
            })}
        </div>
    )
}

export default Albums;