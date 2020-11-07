import './css/App.css';
import './css/style.css';

import { useState, useEffect } from "react";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };
    getData();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        {console.log(information)};
        <Switch>
        <Route
            path="/"
            exact
            
            
          />
          <Route 
            path="/contact"
           
          />
          <Route 
            path="/profile"
           
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
