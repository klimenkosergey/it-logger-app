import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLogs, deleteLog, setCurrent } from '../../actions/logs';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const LogList = ({ logs, loading, getLogs, deleteLog, setCurrent }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map(log => (
            <LogItem
              key={log.id}
              log={log}
              deleteLog={deleteLog}
              setCurrent={setCurrent}
            />
          ))
        )}
      </ul>
    );
  }
};

const mapStateToProps = state => ({
  logs: state.logs.logs,
  loading: state.logs.loading
});

const ConnectedLogList = connect(
  mapStateToProps,
  { getLogs, deleteLog, setCurrent }
)(LogList);

export { LogList, ConnectedLogList as default };
