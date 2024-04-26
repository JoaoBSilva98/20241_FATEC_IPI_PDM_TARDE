import React from 'react';
import Imagem from './Imagem';

const ListaImagens = ({ photos }) => {
  return (
    photos.map((photo) => (
      <div key={photo.id}>
        <Imagem
          src={photo.src.small}
          id={photo.id}
          alt={photo.alt}
          photographerUrl={photo.photographer_url}
          photographer={photo.photographer}
        />
      </div>
    ))
  );
};

export default ListaImagens;