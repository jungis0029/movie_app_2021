import React from 'react';
import ProptTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4> {rating}/5.0 </h4>
      <img src={picture} />
    </div>
  );  
}

const foodILike = [
  {
    name:'kimchi', 
    image:'kimchi',
    rating: 4.9
  },
  {
    name:'kimchi2', 
    image:'kimchi2',
    rating: 3.9
  },
  {
    name:'kimchi3',
    image:'kimchi33',
    rating: 1.6
  },
  {
    name:'kimchi4', 
    image:'kimchi44',
    rating: 4.0
  }
];

function App() {
  return (
    <div> 
      {foodILike.map(dish1 => (<Food name={dish1.name} picture={dish1.image} rating={dish1.rating}/>))}
    </div>
  );
}

Food.prototype = {
  name: ProptTypes.string.isRequired,
  picture: ProptTypes.string.isRequired,
  rating: ProptTypes.number.isRequired
}

export default App;
