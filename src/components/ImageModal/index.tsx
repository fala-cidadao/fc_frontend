import React from 'react';

interface IProps {
  show: boolean;
  image: string;
  showModal: (show: boolean) => void;
}

const ImageModal: React.FC<IProps> = (props) => {
  return (
    <div className={`modal ${props.show ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <p className='image is-4by3'>
          <img src={props.image} alt='imagem' />
        </p>
      </div>
      <button
        onClick={() => props.showModal(false)}
        className='modal-close is-large'
        aria-label='close'
      ></button>
    </div>
  );
};

export default ImageModal;
