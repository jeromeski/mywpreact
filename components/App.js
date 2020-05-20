import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
// import {createBrowserHistory} from 'history'
import Navbar from './Navbar';
import Home from '../pages/Home';
import Works from '../pages/Works';

// export const history = createBrowserHistory()

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/works' component={Works} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
