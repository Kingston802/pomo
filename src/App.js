import { useState, useEffect } from 'react';
import Header from './components/Header';
import TimerWrapper from './components/TimerWrapper';
import Items from './components/Items';
import Footer from './components/Footer';
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies(["items"]);
  const [items, setItems] = useState(cookies.items ? cookies.items : []);

  function handleChange() {
    console.log(items);
    setCookies('items', items, { path: '/' })
  }
  
  // listens for changes in the items state 
  // and adds them to the cookie 
  useEffect(() => {
    handleChange();
  },[items]); // <-- here put the parameter to listen
  
  return (
    <>
      <Header/>
      <TimerWrapper items={items} setItems={setItems}/>
      <Items items={items} setItems={setItems}/>
      <Footer/>
    </>
  )
}

export default App; 