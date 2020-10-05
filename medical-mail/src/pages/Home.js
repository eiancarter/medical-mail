import React, { useState } from 'react';

// Components
import HomeNav from '../components/home/Navbar';
import Filters from '../components/search/Filters';
import ReportList from '../components/reports/ReportList';
// Report Data
import { data } from '../../src/data';

const Home = () => {

    const [ input, setInput ] = useState('');
    const [ results, setResults ] = useState([])
    const [ reports, setReports ] = useState(data)

    return (
        <div>
            <HomeNav
                input={input}
                setInput={setInput}
                results={results}
                setResults={setResults}
                reports={reports}
            />
            <Filters />
            <ReportList
                input={input} 
                results={results}
            />
        </div>
    )
}

export default Home;