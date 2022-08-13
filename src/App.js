import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import ProductList from './ProductList/ProductList.jsx';
import Cart from './Cart/Cart.jsx';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
