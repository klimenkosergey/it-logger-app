import React from 'react';
import M from 'materialize-css/dist/js/materialize';

import TechForm from './TechForm';

const EditTechModal = () => {
  const onSubmit = (firstName, lastName) => {
    const modalElem = document.querySelector('#edit-tech-modal');
    const instance = M.Modal.getInstance(modalElem);

    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last names' });
    } else {
      instance.close();
    }
  };

  return (
    <div id='edit-tech-modal' className='modal'>
      <TechForm onSubmit={onSubmit} />
    </div>
  );
};

export default EditTechModal;
