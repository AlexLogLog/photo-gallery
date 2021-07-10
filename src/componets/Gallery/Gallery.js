import React from 'react';
import Albums from '../Albums/Albums';

function Gallery(props) {
    const {
        users,
        albums,
        buttonOpenAlbum,
        photos
    } = props;
    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id} className="gallery">
                        <h1 className="gallery__author">This albums username "{user.username}"</h1>
                        <Albums  albums={albums.filter((album) =>
                            album.userId === user.id)} buttonOpenAlbum={buttonOpenAlbum} photos={photos} />
                    </div>
                )
            }
            )}
        </div>

    )
}

export default Gallery;