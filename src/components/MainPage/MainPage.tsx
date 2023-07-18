import React, { useState, useEffect } from 'react';
import './MainPage.scss'; // Import the SCSS file
import FighterSelectionScreen from '../FighterSelectionScreen/FighterSelectionScreen';
import SelectedFightersScreen from '../SelectedFightersScreen/SelectedFightersScreen';
import axios, { AxiosResponse } from 'axios';
import { FighterData } from '../FighterSelectionScreen/FighterSelectionScreen';

const MainPage: React.FC = () => {
  const [fighters, setFighters] = useState<FighterData[]>([]);
  const [selectedFighters, setSelectedFighters] = useState<number[]>([]);
  const [showFightersPage, setShowFightersPage] = useState(false);

  useEffect(() => {
    const fetchFighters = async () => {
      const options = {
        method: 'GET',
        url: 'https://anonfunction-mortal-kombat-v1.p.rapidapi.com/Articles/List',
        params: { limit: '100' },
        headers: {
          'X-RapidAPI-Key': '97c95137cfmsh352f969631e65bep152182jsnc1ae00f0e324',
          'X-RapidAPI-Host': 'anonfunction-mortal-kombat-v1.p.rapidapi.com',
        },
      };

      try {
        const response: AxiosResponse<FighterData[]> = await axios.request(options);
        setFighters(response.data);
      } catch (error) {
        console.error('Error fetching fighters:', error);
      }
    };

    fetchFighters();
  }, []);

  const selectFighter = (fighterId: number) => {
    const isFighterSelected = selectedFighters.includes(fighterId);
    let updatedSelectedFighters: number[] = [];

    if (isFighterSelected) {
      updatedSelectedFighters = selectedFighters.filter((selectedId) => selectedId !== fighterId);
    } else {
      updatedSelectedFighters =
        selectedFighters.length < 2 ? [...selectedFighters, fighterId] : [fighterId];
    }

    setSelectedFighters(updatedSelectedFighters);
    setShowFightersPage(updatedSelectedFighters.length === 2);
  };

  return (
    <div className="main-page">
      <h1>Mortal Kombat Fighters</h1>
      {showFightersPage ? (
        <SelectedFightersScreen fighters={fighters} selectedFighters={selectedFighters} />
      ) : (
        <FighterSelectionScreen
          fighters={fighters}
          selectedFighters={selectedFighters}
          onSelectFighter={selectFighter}
        />
      )}
    </div>
  );
};

export default MainPage;
