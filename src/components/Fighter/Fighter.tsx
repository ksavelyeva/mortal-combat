import React from 'react';

interface FighterProps {
  id: number;
  name: string;
  image: string;
  selected: boolean;
  onSelect?: (id: number) => void;
}

const Fighter: React.FC<FighterProps> = ({ id, name, image, selected, onSelect }) => (
  <li
    className={`fighter-item ${selected ? 'selected' : ''}`}
    onClick={() => onSelect && onSelect(id)}
  >
    <img src={image} alt={name} />
    <p>{name}</p>
  </li>
);

export default Fighter;
