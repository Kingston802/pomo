import { useState, useEffect } from 'react';
import Header from './components/Header';
import TimerWrapper from './components/TimerWrapper';
import Items from './components/Items';
import Footer from './components/Footer';
import { useCookies } from "react-cookie";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
      buttonText="Sure man!!"
      style={{ background: "#76949F", borderTop: "2px solid #435860" }}
      buttonStyle={{ background: "#EBEBFF", fontSize: "13px" }}
      >This site uses cookies to store your items after you leave!</CookieConsent>
    </>
  )
}

export default App; 