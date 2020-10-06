import React from 'react';
// Bootstrap
import { Nav, Navbar } from 'react-bootstrap';
// Images
import MedicalLogo from '../../assets/img/icon.svg';
// Components
import Search from '../search/Search';

const HomeNav = (props) => {

    const {reports, results, setResults, input, setInput, filters, setFilters} = props;

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <img style={{width:'50px'}} src={MedicalLogo} alt='logo'/>
            <Navbar.Brand href="/">Medical Mail</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">All Reports</Nav.Link>
            </Nav>
            <Search 
                input={input}
                setInput={setInput}
                reports={reports}
                results={results}
                setResults={setResults}
                filters={filters}
                setFilters={setFilters}
            />
        </Navbar>
        </>
    )
}

export default HomeNav;