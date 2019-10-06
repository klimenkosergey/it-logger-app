import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';

import { addLog } from '../../actions/logs';
import LogForm from './LogForm';

const AddLogModal = ({ addLog }) => {
  const onSubmit = (message, tech, attention, date) => {
    const modalElem = document.querySelector('#add-log-modal');
    const instance = M.Modal.getInstance(modalElem);

    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      // Close the Modal
      instance.close();
      addLog({ message, tech, attention, date });
      M.toast({ html: 'Log added' });
    }
  };

  return (
    <div id='add-log-modal' className='modal'>
      <LogForm onSubmit={onSubmit} />
    </div>
  );
};

const ConnectedAddLogModal = connect(
  null,
  { addLog }
)(AddLogModal);

export { AddLogModal, ConnectedAddLogModal as default };
