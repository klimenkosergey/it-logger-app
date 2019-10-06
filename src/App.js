import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import LogList from './components/logs/LogList';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';
import AddTechModal from './components/techs/AddTechModal';
import EditTechModal from './components/techs/EditTechModal';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  // Same as componentDidMount
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />
          <EditTechModal />
          <LogList />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
