import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
        <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;
