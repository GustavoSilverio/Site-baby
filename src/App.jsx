import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Historia from './Pages/Historia/Historia';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ourHistory' element={<Historia />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
