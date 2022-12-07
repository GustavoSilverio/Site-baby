import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Historia from './Pages/Historia/Historia';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ourHistory' element={<Historia />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
