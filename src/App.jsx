import './App.css';
import MainPage from './layouts/main-page/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './layouts/nav-bar/NavBar';
import Shop from './layouts/shop/Shop';
import SecondShop from './layouts/shop/second-page/SecondShop';
import History from './layouts/geschichte/History';
import About from './layouts/about/About';
import Tovar from './layouts/tovar/Tovar';

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' index element={<MainPage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/page/2' element={<SecondShop/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='shop/:path' element={<Tovar/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
