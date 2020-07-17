import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import PanelList from './components/PanelList';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <h1>panel-test-app</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
