import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/cart';
import Nav from './components/nav/nav';
import './components/cart/cart.css'
import Summary from './components/Summary/summary';
import './components/Summary/summary.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from './utilities/fakedb';

function App() {
  const [products, setState] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(resp => resp.json())
      .then(data => setState(data))
  }, []);

  useEffect(()=>
  {
    const storedCart = getShoppingCart();

    const savedCart = [];
    // console.log(storedCart)
    for(const id in storedCart)
    {
      const addedProduct = products.find(product=> product.id === id);
     
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    } 
    setCart(savedCart);
  }, [products])


  const btnCart = (product) => {
    // const newCart = [...carts, product];
    
    let newCart = [];
    const exists = carts.find(pd => pd.id === product.id);
    if(!exists)
    {
      product.quantity = 1;
      newCart = [...carts, product]
    }
    else{
      exists.quantity = exists.quantity + 1;
      const remaining = carts.filter(pd =>pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  }

  const handleRemoveAll = () => {
    setCart([]);
    deleteShoppingCart();
    }

  return (
    <div className="App">
      
      <div className='layout'>
        <div className='grid'>
          {
            products.map(product =>
              <Cart
                className='grid'
                key={product.id}
                product={product}
                btnCart={btnCart}></Cart>
            )
          }
        </div>
        <div>
          <Summary 
          carts={carts}
          handleRemoveAll = {handleRemoveAll}></Summary>
        </div>
      </div>
    </div>
  );
}

export default App;
