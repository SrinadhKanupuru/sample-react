
import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hari from './Hari';
import Subbu from './Subbu';
import Srinadh from './Srinadh';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='hari' element={<Hari/>}/>
        <Route path='subbu' element={<Subbu/>}/>
        <Route path='/' element={<Srinadh/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
