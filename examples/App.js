import React from 'react';
import { Features } from '../dist';
import { injectStyle } from '../dist/inject-style';

const App = () => {
  injectStyle();
  return (
    <div>
      <Features></Features>
    </div>
  );
};

export default App;
