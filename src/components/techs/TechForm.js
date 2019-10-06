import React, { Fragment, useState } from 'react';

const TechForm = props => {
  const [firstName, setFirstName] = useState(props.firstName || '');
  const [lastName, setLastName] = useState(props.lastName || '');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(firstName, lastName);

    // Clear inputs
    setFirstName('');
    setLastName('');
  };

  return (
    <Fragment>
      <div className='modal-content'>
        <h4 className='center'>
          {!props.firstName && !props.lastName ? 'Add' : 'Edit'} Technician
        </h4>
        <div className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor='firstName' className='active'>
                First Name
              </label>
            </div>
            <div className='input-field col s6'>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor='lastName' className='active'>
                Last Name
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='waves-light blue btn'>
          Submit
        </a>
      </div>
    </Fragment>
  );
};

export default TechForm;
