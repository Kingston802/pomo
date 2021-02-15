import { useState } from 'react';
import Header from './components/Header';
import TimerWrapper from './components/TimerWrapper';
import Items from './components/Items'

function App() {
  const [items, setItems] = useState(['Calculus', 'Games', 'Programming']);
  return (
    <>
      <Header/>
      <TimerWrapper/>
      <Items items={items}/>
    </>
  )
}

export default App; 