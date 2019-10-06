import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize';

import { getTechs, deleteTech } from '../../actions/techs';
import TechItem from './TechItem';

const TechListModal = ({ techs, loading, getTechs, deleteTech }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const onEdit = e => {
    e.preventDefault();
    M.Modal.getInstance(document.querySelector('#tech-list-modal')).close();
    M.Modal.getInstance(document.querySelector('#edit-tech-modal')).open();
  };

  const onDelete = (id, firstName, lastName) => {
    M.toast({ html: `Removed technician ${firstName} ${lastName}` });
    deleteTech(id);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center'>Technician List</h4>
        {loading ? (
          <p className='center'>Loading...</p>
        ) : (
          <ul className='collection'>
            {techs.length === 0 ? (
              <p className='center'>No technicians to show...</p>
            ) : (
              techs.map(tech => (
                <TechItem
                  key={tech.id}
                  tech={tech}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </ul>
        )}
      </div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-light blue btn'>
          Close
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.techs.techs,
  loading: state.techs.loading
});

const ConnectedTechListModal = connect(
  mapStateToProps,
  { getTechs, deleteTech }
)(TechListModal);

export { TechListModal, ConnectedTechListModal as default };
