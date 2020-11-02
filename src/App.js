import React, { useState, useEffect } from 'react';

import { Logo } from 'ui';
import { isMobile } from 'helpers/ui.helpers';
import './App.css';

export default function App() {
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const checkScreen = () => setMobile(() => isMobile());

    window.addEventListener('resize', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <main className="container">
          {mobile ? 'MOBILE' : 'DESKTOP'}
        </main>
      </header>
    </div>
  );
}
