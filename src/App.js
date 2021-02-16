import { useState } from 'react';
import Header from './components/Header';
import TimerWrapper from './components/TimerWrapper';
import Items from './components/Items';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState(['Calculus', 'Games', 'Programming']);
  return (
    <>
      <Header/>
      <TimerWrapper/>
      <Items items={items} setItems={setItems}/>
      <Footer/>
    </>
  )
}

export default App; 