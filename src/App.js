import { BrowserRouter as Router } from 'react-router-dom'

import MainHeader from './components/MainHeader';
// import Footer from './components/Footer';
import Routes from './Routes/index'

function App() {
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
