import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import data from './data';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ProductList products = { data } />
      <Cart />
    </div>
  );
}

export default App;
