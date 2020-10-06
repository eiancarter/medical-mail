import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
import FullReport from './pages/FullReport';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/report/:id" component={Home} />
        <Route path="/" render={() => <div>Page does not exist...</div>} />
      </Switch>
    </div>
  );
}

export default App;
