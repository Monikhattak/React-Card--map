import React from 'react';
import Data from './Data';
import './Card.css';

function Card() {
  return (
    <div className='mainContainer'>
      {Data.map(({ id, name, title, description, price, image }) => (
        <div className='cardContainer' key={id}>
          <div className="card">
            <div className="image">
              <img src={image}/>
            </div>
            <div className="dec">
              <h1>{title}</h1>
              <p>{description}</p>
              <span>{price}</span>
              <p>{name}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
