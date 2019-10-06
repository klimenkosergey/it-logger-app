import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { searchLogs } from '../../actions/logs';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onSearch = e => {
    searchLogs(e.target.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search logs...'
              ref={text}
              onChange={onSearch}
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const ConnectedSearchBar = connect(
  null,
  { searchLogs }
)(SearchBar);

export { SearchBar, ConnectedSearchBar as default };
