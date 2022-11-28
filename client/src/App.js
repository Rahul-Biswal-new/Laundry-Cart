// import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/home";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "../src/components/register";
import Createorder from "./components/createorder";
import Orderlist from "./components/orderlist";
import ListView from "./components/listview";
// import Summary from "./components/summary";
import Homepage from "../src/components/homepage";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/createorder">
          <Createorder />
        </Route>
        <Route path="/orderlist">
          <Orderlist />
        </Route>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/listview">
          <ListView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
