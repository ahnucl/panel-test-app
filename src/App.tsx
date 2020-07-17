import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Panel from './pages/Panel';

const App: React.FC = () => {
  return (
    <>
      <h1>panel-test-app</h1>
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
      <Panel />
      <GlobalStyle />
    </>
  );
};

export default App;
