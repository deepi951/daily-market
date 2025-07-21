import { useState } from 'react';
import './dailyMarket.css'; 

import Header from './component/Header';
import Welcome from './component/Welcome';
import About from './component/About';
import Login from './component/Login';
import Products from './component/Products';
import Cart from './component/Cart';
import Payment from './component/Payment';
import Shipping from './component/Shipping';



function App() {
  const [currentSection, setCurrentSection] = useState('welcome');

  const renderSection = () => {
    switch (currentSection) {
      case 'welcome': return <Welcome />;
      case 'about': return <About />;
       case 'login': return <Login onLoginSuccess={() => setCurrentSection('products')} />;
       case 'products': return <Products />;
       case 'cart': return <Cart />;
       case 'payment': return <Payment />;
       case 'shipping': return <Shipping />;


       default: return <Welcome />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentSection} />
      {renderSection()}
    </div>
  );
}

export default App;


