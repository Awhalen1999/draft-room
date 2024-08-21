import React, { useState, useEffect } from 'react';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

const DraftSetup = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [playerSearchResults, setPlayerSearchResults] = useState([]);
  const [draftBoard, setDraftBoard] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const cachedPlayers = localStorage.getItem('allPlayers');

        if (cachedPlayers) {
          // Use cached data if it exists
          setAllPlayers(JSON.parse(cachedPlayers));
          console.log('Using cached data');
        } else {
          console.log('Calling API...');
          const response = await fetch(`${API_URL}?key=${API_KEY}`);
          const data = await response.json();

          // Store fetched data in localStorage
          localStorage.setItem('allPlayers', JSON.stringify(data));
          setAllPlayers(data);
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, [API_KEY, API_URL]);

  useEffect(() => {
    if (searchTerm) {
      setPlayerSearchResults(
        allPlayers.filter((player) =>
          `${player.FirstName} ${player.LastName} ${player.Team} ${player.Position}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setPlayerSearchResults([]);
    }
  }, [searchTerm, allPlayers]);

  const handleAddPlayer = (player) => {
    setDraftBoard([...draftBoard, player]);
    setSearchTerm('');
  };

  const movePlayer = (index, direction) => {
    const newDraftBoard = [...draftBoard];
    const temp = newDraftBoard[index];
    newDraftBoard[index] = newDraftBoard[index + direction];
    newDraftBoard[index + direction] = temp;
    setDraftBoard(newDraftBoard);
  };

  return (
    <div className='min-h-screen p-8 bg-base-200 text-base-content'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Draft Room</h1>

        <input
          type='text'
          placeholder='Search for a player...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-3 mb-4 border border-neutral  rounded-lg shadow-sm text-black'
        />

        {playerSearchResults.length > 0 && (
          <ul className=' rounded-lg shadow-lg overflow-y-auto max-h-60  border border-neutral'>
            {playerSearchResults.map((player, index) => (
              <li
                key={`${player.PlayerID}-${index}`}
                onClick={() => handleAddPlayer(player)}
                className='p-3 border-b border-r border-neutral cursor-pointer hover:bg-accent hover:text-accent-content'
              >
                {player.FirstName} {player.LastName} - {player.Team} (
                {player.Position})
              </li>
            ))}
          </ul>
        )}

        <h2 className='text-2xl font-semibold mt-8 w-full'>Your Draft Board</h2>
        <ul className='rounded-lg shadow-lg mt-4'>
          {draftBoard.map((player, index) => (
            <li
              key={`${player.PlayerID}-${index}`}
              className='flex justify-between p-3 border border-neutral rounded-lg mb-1'
            >
              <div className='flex items-center'>
                <span className='mr-2'>{index + 1}.</span>
                <span>
                  {player.FirstName} {player.LastName} - {player.Team} (
                  {player.Position})
                </span>
              </div>
              <div className='flex items-center'>
                <button
                  onClick={() => movePlayer(index, -1)}
                  disabled={index === 0}
                  className='mr-2'
                >
                  Up
                </button>
                <button
                  onClick={() => movePlayer(index, 1)}
                  disabled={index === draftBoard.length - 1}
                >
                  Down
                </button>
                <button className='ml-2 text-error'>
                  <MdOutlineRemoveCircleOutline size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DraftSetup;
