import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from './pages/Home';
import ReportCard from './components/reports/ReportCard';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:report" component={ReportCard} />
      </Switch>
    </div>
  );
}

export default App;
