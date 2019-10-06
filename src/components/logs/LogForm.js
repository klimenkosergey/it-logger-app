import React, { Fragment, useState, useEffect } from 'react';

import TechSelectOptions from '../techs/TechSelectOptions';

const LogForm = props => {
  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setMessage(props.message ? props.message : message);
    setTech(props.tech ? props.tech : tech);
    setAttention(props.attention ? props.attention : attention);
    // eslint-disable-next-line
  }, [props]);

  const onSubmit = e => {
    e.preventDefault();
    if (props.id) {
      props.onSubmit(props.id, message, tech, attention, new Date());
    } else {
      props.onSubmit(message, tech, attention, new Date());
    }

    // Clear inputs
    setMessage('');
    setTech('');
    setAttention(false);
  };

  return (
    <Fragment>
      <div className='modal-content'>
        <h4 className='center'>
          {!props.message && !props.tech ? 'Add' : 'Edit'} System Log
        </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            {!props.id && (
              <label htmlFor='message' className='active'>
                Log Message
              </label>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
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

export default LogForm;
