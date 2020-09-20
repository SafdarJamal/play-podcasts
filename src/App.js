import React from 'react';
import AppStateProvider from './AppStateProvider';
import AudioElementProvider from './AudioElementProvider';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AppStateProvider>
      <AudioElementProvider>
        <AppRouter />
      </AudioElementProvider>
    </AppStateProvider>
  );
}

export default App;
