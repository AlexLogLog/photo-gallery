import React from 'react';

function PhotoPopup(props) {

  const {
    isOpen,
    link,
    name,
    onClose,
    next,
    ext
  } = props;

  return (
    <div className={`popup  ${isOpen && 'popup_opened'}`}>
      <figure className="popup__photo">
        <div className="popup__conteiner">
          <button className="popup__ext" onClick={ext}></button>
          <button className="popup__close popup__close_type_photo" type="button" onClick={onClose}></button>
          <img className="popup__photo-image" src={link} alt={name} />
          <figcaption className="popup__photo-name">{name}</figcaption>
          <button className="popup__next" onClick={next}></button>
        </div>
      </figure>
    </div>
  );
}

export default PhotoPopup;