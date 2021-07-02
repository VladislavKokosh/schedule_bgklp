import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer';
import Routes from './Routes/index'

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <Routes/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
