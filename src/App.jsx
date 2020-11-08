import "./css/App.css";
import "./css/style.css";

import { useState, useEffect } from "react";

import HomePage from "./components/templates/HomePage";
import ContactPage from "./components/templates/ContactPage";
import ProfilePage from "./components/templates/ProfilePage";
import OrdersPage from "./components/templates/ProfilePage";

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
        <Switch>
          <Route
            path="/"
            exact
            render={() => <HomePage information={information} />}
            information={information}
          />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route
            path="/orderdetails/:query"
            render={({ match }) => (
              <OrdersPage match={match} information={information} />
            )}
            information={information}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
