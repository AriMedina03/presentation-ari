import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  // Check if the src is a video based on the file extension
  const isVideo = props.src.match(/\.(mp4|mov|webm)$/i);

  // Use an <a> tag for external links and <Link> for internal links
  const isExternalLink = Boolean(props.link);
  const WrapperTag = isExternalLink ? 'a' : Link;
  const linkProps = isExternalLink
    ? { href: props.link, target: "_blank", rel: "noopener noreferrer" }
    : { to: props.path };

  return (
    <>
      <li className='cards__item'>
        <WrapperTag className='cards__item__link' {...linkProps}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {isVideo ? (
              <video className='cards__item__video' src={props.src} autoPlay loop muted />
            ) : (
              <img
                className='cards__item__img'
                alt='Project Image'
                src={props.src}
              />
            )}
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </WrapperTag>
      </li>
    </>
  );
}

export default CardItem;
