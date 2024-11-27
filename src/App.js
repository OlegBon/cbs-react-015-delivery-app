import styles from './App.module.scss';
import {Link, Route, Routes} from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
          <Link to="/">Shop</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
      </header>
        <Routes>
            <Route path="/*" element={<Shop/>}/>
            <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        </Routes>
    </div>
  );
}

export default App;
