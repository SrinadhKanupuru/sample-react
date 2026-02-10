
import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hari from './Hari';
import Subbu from './Subbu';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='hari' element={<Hari/>}/>
        <Route path='subbu' element={<Subbu/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
