import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log, deleteLog, setCurrent }) => (
  <li className='collection-item'>
    <a
      href='#edit-log-modal'
      className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
      onClick={e => setCurrent(log)}
    >
      {log.message}
    </a>
    <br />
    <span className='grey-text'>
      <span className='black-text'>ID #{log.id}</span> last edited by{' '}
      <span className='black-text'>{log.tech}</span> on{' '}
      <Moment format={'MMMM Do YYYY, hh:mm:ss a'}>{log.date}</Moment>
    </span>
    <a
      href='#!'
      onClick={e => {
        e.preventDefault();
        deleteLog(log.id);
      }}
      className='secondary-content'
    >
      <i className='material-icons grey-text'>delete</i>
    </a>
  </li>
);

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default LogItem;
