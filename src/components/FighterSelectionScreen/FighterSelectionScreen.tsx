import React from 'react';
import Fighter from '../Fighter/Fighter';

export interface FighterData {
  id: number;
  name: string;
  image: string;
}

interface FighterSelectionScreenProps {
  fighters: FighterData[];
  selectedFighters: number[];
  onSelectFighter: (id: number) => void;
}

const FighterSelectionScreen: React.FC<FighterSelectionScreenProps> = ({
  fighters,
  selectedFighters,
  onSelectFighter,
}) => (
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
