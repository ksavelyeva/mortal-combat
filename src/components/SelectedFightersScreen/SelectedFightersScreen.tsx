import React from 'react';
import Fighter from '../Fighter/Fighter';
import { FighterData } from '../FighterSelectionScreen/FighterSelectionScreen'; // Import the FighterData type from FighterSelectionScreen.tsx

interface SelectedFightersScreenProps {
  fighters: FighterData[]; // Use the imported FighterData type
  selectedFighters: number[];
}

const SelectedFightersScreen: React.FC<SelectedFightersScreenProps> = ({ fighters, selectedFighters }) => (
  <div className="fighters-page">
    <h2>Selected Fighters:</h2>
    <div className="fighters-container">
      {selectedFighters.map((fighterId) => {
        const fighter = fighters.find((fighter) => fighter.id === fighterId);
        if (fighter) {
          return <Fighter key={fighter.id} {...fighter} selected />;
        }
        return null;
      })}
    </div>
  </div>
);

export default SelectedFightersScreen;
