import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const TechSelectOptions = ({ techs }) => {
  return (
    <Fragment>
      {techs.length > 0 &&
        techs.map(tech => (
          <option
            key={tech.id}
            value={`${tech.firstName} ${tech.lastName}`}
          >{`${tech.firstName} ${tech.lastName}`}</option>
        ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  techs: state.techs.techs
});

const ConnectedTechSelectOptions = connect(mapStateToProps)(TechSelectOptions);

export { TechSelectOptions, ConnectedTechSelectOptions as default };
