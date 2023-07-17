import React from 'react';
import Fighter from './Fighter';

const FighterSelectionScreen = ({ fighters, selectedFighters, onSelectFighter }) => (
  <ul className="fighter-grid">
    {fighters.map((fighter) => (
      <Fighter
        key={fighter.id}
        {...fighter}
        selected={selectedFighters.includes(fighter.id)}
        onSelect={onSelectFighter}
      />
    ))}
  </ul>
);

export default FighterSelectionScreen;
