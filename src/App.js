import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './componets/Header/Header';
import Gallery from './componets/Gallery/Gallery';
import Photos from './componets/Photos/Photos';
import PhotoPopup from './componets/PhotoPopup/PhotoPopup';

import './App.css';

function App() {
  const [users, setUsers] = useState(['']);
  const [albums, setAlbums] = useState(['']);
  const [albumName, setAlbumName] = useState('');

  const [photos, setPhotos] = useState(['']);
  const [photosInAlbum, setPhotosInAlbum] = useState(null);
  // const [photo, setPhoto] = useState(['']);
  const [popupPhoto, setPopupPhoto] = useState({
    open: false,
    link: '',
    name: '',
    id: ''
  })
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/photos'),
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/albums')
    ])
      .then(async ([aa, bb, cc]) => {
        const a = await aa.json();
        const b = await bb.json();
        const c = await cc.json();
        return [a, b, c]
      })
      .then(([photos, users, albums]) => {
        setUsers(users);
        setAlbums(albums);
        setPhotos(photos);
        setLoader(true)
      })

  }, []
  )
  function handleAlbumClick(album) {
    setAlbumName(album.title)
    setPhotosInAlbum(photos.filter((photosMy) => photosMy.albumId === album.id))
  }
  function handlePhotoClick(card) {
    const { url, title, id } = card;
    setPopupPhoto({
      open: true,
      link: url,
      name: title,
      id: id
    });
  }

  function handleClosePopup() {
    setPopupPhoto({
      open: false,
      link: '',
      name: '',
      id: ''
    })
  }

  function handleNextFhoto() {
    if (popupPhoto.id === photosInAlbum[photosInAlbum.length - 1].id) {
      const nextPhotoId = 0;
      const { url, title, id } = photosInAlbum[nextPhotoId]
      setPopupPhoto({
        open: true,
        link: url,
        name: title,
        id: id
      });
    } else {
      const nextPhotoId = photosInAlbum.filter((photo) => popupPhoto.id + 1 === photo.id);
      const { url, title, id } = nextPhotoId[0]
      setPopupPhoto({
        open: true,
        link: url,
        name: title,
        id: id
      });
    }

  }

  function handleExtFhoto() {
    if (popupPhoto.id === photosInAlbum[0].id) {
      const extPhotoId = photosInAlbum.filter((photo) => photo.id === photosInAlbum[photosInAlbum.length - 1].id)
      const { url, title, id } = extPhotoId[0]
      setPopupPhoto({
        open: true,
        link: url,
        name: title,
        id: id
      });
    } else {
      const nextPhotoId = photosInAlbum.filter((photo) => popupPhoto.id - 1 === photo.id);
      const { url, title, id } = nextPhotoId[0]
      setPopupPhoto({
        open: true,
        link: url,
        name: title,
        id: id
      });
    }

  }

  return (
    <div className="root">
      <Header />
      <Route exact path='/photo-gallery'>
        {loader && <Gallery users={users} albums={albums} photos={photos} buttonOpenAlbum={handleAlbumClick} />}
      </Route>
      <Route path='/photo-gallery/photos'>
        <Photos photos={photosInAlbum} photoClick={handlePhotoClick} albumName={albumName}></Photos>
      </Route>
      <PhotoPopup
        next={handleNextFhoto}
        ext={handleExtFhoto}
        isOpen={popupPhoto.open}
        name={popupPhoto.name}
        link={popupPhoto.link}
        onClose={handleClosePopup}
      />
      <Route render={() => <Redirect to={{ pathname: "/photo-gallery" }} />} />

    </div>
  );
}

export default App;
