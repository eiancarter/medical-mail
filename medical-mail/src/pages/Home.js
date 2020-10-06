import React, { useState } from 'react';
import { Route, Switch} from 'react-router-dom';
// Components
import HomeNav from '../components/home/Navbar';
import Filters from '../components/search/Filters';
import ReportList from '../components/reports/ReportList';
import FullReport from '../pages/FullReport';
// Report Data
import { data } from '../../src/data';

const Home = () => {

    const [ input, setInput ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ reports, setReports ] = useState(data);
    const [ filters, setFilters ] = useState([]);

    return (
        <div>
            <HomeNav
                input={input}
                setInput={setInput}
                results={results} 
                setResults={setResults}
                reports={reports}
                filters={filters}
                setFilters={setFilters}
            />
            <Filters 
                filters={filters}
                setFilters={setFilters}
            />
            <Switch>
                <Route exact path='/'>
                    <ReportList
                        input={input} 
                        results={results}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </Route>
                <Route exact path='/report/:id'>
                    <FullReport 
                        results={results}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default Home;