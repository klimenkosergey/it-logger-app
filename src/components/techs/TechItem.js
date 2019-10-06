import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech, onEdit, onDelete }) => (
  <li className='collection-item'>
    <a href='#!' onClick={onEdit} className='blue-text'>
      {tech.firstName} {tech.lastName}
    </a>
    <span className='secondary-content'>
      <a
        href='#!'
        className='tech-delete'
        onClick={e => {
          e.preventDefault();
          onDelete(tech.id, tech.firstName, tech.lastName);
        }}
      >
        <i className='material-icons grey-text'>delete</i>
      </a>
    </span>
  </li>
);

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
