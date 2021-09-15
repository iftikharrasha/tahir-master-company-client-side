import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header.js';
import Home from './Pages/Home/Home.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </ScrollToTop>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
