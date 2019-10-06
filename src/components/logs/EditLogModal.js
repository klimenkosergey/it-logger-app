import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';

import { editLog } from '../../actions/logs';
import LogForm from './LogForm';

const EditLogModal = ({ editLog, current }) => {
  const onSubmit = (id, message, tech, attention, date) => {
    const modalElem = document.querySelector('#edit-log-modal');
    const instance = M.Modal.getInstance(modalElem);

    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      instance.close();
      editLog({ id, message, tech, attention, date });
    }
  };

  return (
    <div id='edit-log-modal' className='modal'>
      <LogForm onSubmit={onSubmit} {...current} />
    </div>
  );
};

const mapStateToProps = state => ({
  current: state.logs.current
});

const ConnectedEditLogModal = connect(
  mapStateToProps,
  { editLog }
)(EditLogModal);

export { EditLogModal, ConnectedEditLogModal as default };
