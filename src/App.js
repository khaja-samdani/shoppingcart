import Nav from "./components/header/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/header/home/Home";
import Contact from "./components/header/contacts/Contact";
import About from "./components/header/about/About";
import Cart from "./components/header/cart/Cart";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import ProductListActions from "../src/Redux/actions/Actions"

function App() {
  const dispatch = useDispatch()

  const fetchFakeApi = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products")
      if (data.status === 200 && data.data.length > 0) {

        dispatch(ProductListActions(data.data))
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchFakeApi()
  }, [])



  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
