import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchHeroes, clearHeroes, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a search term!', 'danger');
    } else {
      searchHeroes(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='row mt-5'>
      <div className='col-12 text-center'>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search for a Superhero...'
            value={text}
            onChange={onChange}
          />
          <input type='submit' value='Search' className='btn btn-success' />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearHeroes}>
            Clear Search Results
          </button>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  searchHeroes: PropTypes.func.isRequired,
  clearHeroes: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
