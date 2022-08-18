import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Header} from './components/Header'
import {Footer} from './components/Footer'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'  

function App() {
  return (
    <> 
      <Header />
      <main className='container content'>
        <Router>
          <Switch>
              <Route path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}
 
export default App;