import React, { useState, useEffect } from 'react';
import './MainPage.scss'; // Import the SCSS file
import FighterSelectionScreen from './FighterSelectionScreen';
import SelectedFightersScreen from './SelectedFightersScreen';

const mockedFighters = [
  { id: 1, name: 'Fighter 1', image: 'fighter1.jpg' },
  { id: 2, name: 'Fighter 2', image: 'fighter2.jpg' },
  { id: 3, name: 'Fighter 3', image: 'fighter3.jpg' },
  { id: 4, name: 'Fighter 4', image: 'fighter4.jpg' },
  { id: 5, name: 'Fighter 5', image: 'fighter5.jpg' },
  { id: 6, name: 'Fighter 6', image: 'fighter6.jpg' },
];

const MainPage = () => {
  const [selectedFighters, setSelectedFighters] = useState([]);
  const [showFightersPage, setShowFightersPage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { keyCode } = event;
      const maxIndex = mockedFighters.length - 1;

      if (keyCode === 37) {
        // ArrowLeft
        setSelectedFighters((prevSelectedFighters) =>
          prevSelectedFighters.map((_, index) =>
            index === 0 ? (maxIndex - 1) % mockedFighters.length : (index - 1) % mockedFighters.length
          )
        );
      } else if (keyCode === 39) {
        // ArrowRight
        setSelectedFighters((prevSelectedFighters) =>
          prevSelectedFighters.map((_, index) => (index + 1) % mockedFighters.length)
        );
      } else if (keyCode === 38) {
        // ArrowUp
        setSelectedFighters((prevSelectedFighters) =>
          prevSelectedFighters.map((_, index) =>
            index === 0 ? (maxIndex - 2) % mockedFighters.length : (index - 3) % mockedFighters.length
          )
        );
      } else if (keyCode === 40) {
        // ArrowDown
        setSelectedFighters((prevSelectedFighters) =>
          prevSelectedFighters.map((_, index) =>
            index === maxIndex ? (index + 2) % mockedFighters.length : (index + 3) % mockedFighters.length
          )
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectFighter = (fighterId) => {
    const isFighterSelected = selectedFighters.includes(fighterId);
    let updatedSelectedFighters = [];

    if (isFighterSelected) {
      updatedSelectedFighters = selectedFighters.filter(
        (selectedId) => selectedId !== fighterId
      );
    } else {
      updatedSelectedFighters =
        selectedFighters.length < 2
          ? [...selectedFighters, fighterId]
          : [fighterId];
    }

    setSelectedFighters(updatedSelectedFighters);
    setShowFightersPage(updatedSelectedFighters.length === 2);
  };

  return (
    <div className="main-page">
      <h1>Mortal Kombat Fighters</h1>
      {showFightersPage ? (
        <SelectedFightersScreen fighters={mockedFighters} selectedFighters={selectedFighters} />
      ) : (
        <FighterSelectionScreen
          fighters={mockedFighters}
          selectedFighters={selectedFighters}
          onSelectFighter={selectFighter}
        />
      )}
    </div>
  );
};

export default MainPage;
