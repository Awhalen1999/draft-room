import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const DraftSetup = () => {
  const [draftName, setDraftName] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [rounds, setRounds] = useState(15);
  const [draftDate, setDraftDate] = useState({});
  const [teams, setTeams] = useState(12);
  const [notes, setNotes] = useState('');

  const handleSelectChange = (event) => {
    setSelectedSport(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      draftName,
      selectedSport,
      rounds,
      draftDate,
      teams,
      notes,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center min-h-full'
    >
      <div className='p-10 w-full sm:w-full md:w-3/4 lg:w-1/2'>
        <h2 className='text-2xl font-bold mb-6 text-center'>
          Setup Your Draft
        </h2>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Draft Name
          </label>
          <input
            type='text'
            placeholder='Enter draft name'
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
            className='input input-bordered input-primary w-full'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Select a Sport
          </label>
          <select
            className='select select-primary w-full'
            value={selectedSport}
            onChange={handleSelectChange}
            required
          >
            <option disabled value=''>
              Select a sport
            </option>
            <option value='NFL'>NFL</option>
            <option value='MLB'>MLB</option>
            <option value='NHL'>NHL</option>
          </select>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Number of Rounds
          </label>
          <input
            type='number'
            min='1'
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            className='input input-bordered input-primary w-full'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Draft Date & Time (optional)
          </label>
          <Datepicker
            value={draftDate}
            onChange={(newValue) => setDraftDate(newValue)}
            useRange={false}
            asSingle={true}
            inputClassName='input input-bordered input-primary w-full'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>
            Number of Teams (optional)
          </label>
          <input
            type='number'
            min='2'
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
            className='input input-bordered input-primary w-full'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-600'>
            Custom Notes (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className='textarea textarea-bordered w-full'
            placeholder='Any custom rules or notes?'
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary btn-block text-white shadow-sm'
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default DraftSetup;
