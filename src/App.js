
import background from './components/background';
import background1 from './components/background1';
import background2 from './components/background2';

import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {background()}
      {background1()}
      {background2()}
    </div>
  );
}

export default App;
