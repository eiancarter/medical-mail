import React from 'react';

// Components
import HomeNav from '../components/home/Navbar';
import Filters from '../components/search/Filters';
import ReportList from '../components/reports/ReportList';

const Home = () => {
    return (
        <div>
            <HomeNav />
            <Filters />
            <ReportList />
        </div>
    )
}

export default Home;