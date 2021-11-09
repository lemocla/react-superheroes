import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchHeroes, clearHeroes, showClear, showAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter a search term!', 'danger');
    } else {
      searchHeroes(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);
  console.log(text);

  return (
    <div className='row mt-5'>
      <div className='col-12 text-center'>
        <form onSubmit={onSubmit} className='form'>
          <div className='row  justify-content-center'>
            <div className='col-6'>
              <input
                type='text'
                name='text'
                className='form-control'
                placeholder='Search Github Users...'
                value={text}
                onChange={onChange}
              />
            </div>
          </div>
          <input
            type='submit'
            value='Search'
            className='btn btn-success mt-3'
          />
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
