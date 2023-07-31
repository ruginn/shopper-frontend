import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.jsx'
import data from './periodTable.json'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import FAQ from './Pages/FAQ';
import Returns from './Pages/Returns';
import Recall from './Pages/Recall';

function App() {
  const result = data.elements.filter(element => element.name.toLowerCase() === 'hydrogen')
  
  
  return (
    <div className="App">
      <div className='page--content'>
      <ScrollToTop />
      <NavBar />
      <div className='after--nav'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/returns' element={<Returns/>}/>
          <Route path='/recalls' element={<Recall/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductPage/>}/>
        </Routes>
      </div>
      </div>
      <Footer />

      {/* {data.elements.map((element) => (
        <div key={element.name}>
          <span>{element.name}</span>
          <span>{element.number}</span>
        </div>
      ))}

      {console.log(data.elements[0])}
      {console.log(result)} */}
    </div>
  );
}

export default App;
