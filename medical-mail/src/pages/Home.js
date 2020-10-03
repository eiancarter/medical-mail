import React from 'react';

// Components
import Navbar from '../components/home/Navbar';
import Search from '../components/search/Search';
import ReportList from '../components/reports/ReportList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Medical</h1>
            <Search />
            <ReportList />
        </div>
    )
}

export default Home;