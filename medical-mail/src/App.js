import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Home} />
        <Route path="/" render={() => <div>Page does not exist...</div>} />
      </Switch>
    </div>
  );
}

export default App;
