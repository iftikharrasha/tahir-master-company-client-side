import { React, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LazyLoad from './Components/LayLoadSpinner/LazyLoadSpinner';
// import logo from './logo.svg';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/home">
                            <Suspense fallback={<LazyLoad></LazyLoad>}>
                                
                            </Suspense>
                    </Route>
                    <Route exact path="/">
                            <Suspense fallback={<LazyLoad></LazyLoad>}>
                              
                            </Suspense>
                    </Route>
                    <Route path="*">
                            <Suspense fallback={<LazyLoad></LazyLoad>}>
                                <NotFound></NotFound>
                            </Suspense>
                    </Route>
                </Switch>
            </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
