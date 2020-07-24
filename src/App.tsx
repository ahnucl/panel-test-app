import React from 'react';

import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import Panel from './pages/Panel';

import store from './store';

const App: React.FC = () => {
  return (
    <>
      <h1>panel-test-app</h1>
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
      <Provider store={store}>
        <Panel />
      </Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
