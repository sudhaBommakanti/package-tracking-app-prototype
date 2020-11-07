import './css/App.css';
import './css/style.css';

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
