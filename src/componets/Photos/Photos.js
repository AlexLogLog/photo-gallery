import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Photo from '../Photo/Photo';


function Photos(props) {
    const {
        photos,
        photoClick,
        albumName
    } = props;

    const history = useHistory();
    if (photos === null) {
        return (
            <>
                {history.push('/photo-gallery')}
            </>
        )
    } else if (photos.length === 0) {
        return (
            <div className='photos'>
                <div className='photos__go-back'>
                    <Link to='/photo-gallery' className='photos__go-back'>&#8592; Go back to the main page</Link>
                </div>
                <p className='photos__name-album'> No fhotos in album "{albumName}"</p>
            </div>
        )
    } else {
        return (
            <div className='photos'>
                <div className='photos__go-back'>
                    <Link to='/photo-gallery' className='photos__go-back'>&#8592; Go back to the main page</Link>
                </div>
                <p className='photos__name-album'> Fhotos in album "{albumName}"</p>
                <div className="photos__block">
                    {photos.map((photo) => {
                        return (
                            <Photo photo={photo} photoClick={photoClick} key={photo.id} />
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Photos;