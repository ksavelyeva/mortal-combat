import React from 'react';

const Fighter = ({ id, name, image, selected, onSelect }) => (
  <li
    className={`fighter-item ${selected ? 'selected' : ''}`}
    onClick={() => onSelect(id)}
  >
    <img src={image} alt={name} />
    <p>{name}</p>
  </li>
);

export default Fighter;
