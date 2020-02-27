import React from 'react';
import { Link } from 'react-router-dom';

const MocktailCard = ({ drink }) => {
  console.log(drink.drink, drink);
  return(
    <article>
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt='drink image' className='drink-image'/>
    </article>
  )
};

export default MocktailCard;
