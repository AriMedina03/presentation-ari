import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  // Check if the src is a video based on the file extension
  const isVideo = props.src.match(/\.(mp4|mov|webm)$/i);

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {isVideo ? (
              <video className='cards__item__video' src={props.src} autoPlay loop muted />
            ) : (
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={props.src}
              />
            )}
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
