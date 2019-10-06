import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';

import { addTech } from '../../actions/techs';
import TechForm from './TechForm';

const AddTechModal = ({ addTech }) => {
  const onSubmit = (firstName, lastName) => {
    const modalElem = document.querySelector('#add-tech-modal');
    const instance = M.Modal.getInstance(modalElem);

    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last names' });
    } else {
      instance.close();
      M.toast({ html: `Added ${firstName} ${lastName} as technician` });
      addTech({ firstName, lastName });
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <TechForm onSubmit={onSubmit} />
    </div>
  );
};

const ConnectedAddTechModal = connect(
  null,
  { addTech }
)(AddTechModal);

export { AddTechModal, ConnectedAddTechModal as default };
