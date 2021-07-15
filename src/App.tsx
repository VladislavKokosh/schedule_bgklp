import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainHeader from './components/MainHeader';
// import Footer from './components/Footer';
import Routes from './Routes'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
      <MainHeader/>
      <Routes/>
      {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
