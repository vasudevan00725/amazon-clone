import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route path="/checkout">
            <Checkout />
            </Route>
            <Route path="/">
            <Header />
             <Home />
               <Checkout />
            </Route>
          </ Switch>
           </div>
    </Router>
  );
}

export default App;
