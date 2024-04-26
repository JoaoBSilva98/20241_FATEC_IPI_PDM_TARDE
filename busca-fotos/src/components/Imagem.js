import React from 'react';

const Imagem = ({ src, alt, id, photographerUrl, photographer }) => {
  return (
    <div key={id} className="flex flex-col items-center">
      <div className="mb-2">
        <img src={src} alt={alt} title={`Imagem por: ${photographer}`} />
        <p className="mt-2">
          <a href={photographerUrl} target="_blank" rel="noopener noreferrer" title={photographer}>
            Créditos da foto
          </a>
        </p>
      </div>
    </div>
  );
};

export default Imagem;
