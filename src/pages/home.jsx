import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Home = () => {
  const drafts = ['Draft 1', 'Draft 2', 'Draft 3', 'Draft 4'];

  return (
    <div className='grid grid-cols-4 gap-4 p-10'>
      <Link
        to='/draft-setup'
        className='h-32 border border-base-content rounded-lg p-4 flex items-center justify-center'
      >
        <button className='btn glass'>
          <FaPlus />
        </button>
      </Link>
      {drafts.map((draft, index) => (
        <Link
          key={index}
          to='/draft-edit'
          className='h-32 border border-base-content rounded-lg p-4 flex items-center justify-center'
        >
          {draft}
        </Link>
      ))}
    </div>
  );
};

export default Home;
