import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Cards from './Components/Cards'
import CardsDetails from './Components/CardsDetails';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
