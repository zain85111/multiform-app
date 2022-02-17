import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";
import { Forms } from "./pages/Forms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Content/>
          </Route>
          <Route path='/forms'>
            <Forms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
