function Header({ onNavigate }) {
  return (
    <header>
      <h2>Daily Market</h2>
      <nav>
        <button onClick={() => onNavigate('welcome')}>Home</button>
        <button onClick={() => onNavigate('about')}>About Us</button>
        <button onClick={() => onNavigate('login')}>Login</button>
        <button onClick={() => onNavigate('products')}>Products</button>
        <button onClick={() => onNavigate('cart')}>Cart</button>
        <button onClick={() => onNavigate('payment')}>Payment</button>
        <button onClick={() => onNavigate('shipping')}>Shipping</button>
      </nav>
    </header>
  );
}

export default Header;
