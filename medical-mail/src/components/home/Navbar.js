import React from 'react';
// Bootstrap
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
// Images
import MedicalLogo from '../../assets/img/icon.svg';

const HomeNav = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <img style={{width:'50px'}} src={MedicalLogo} alt='logo'/>
            <Navbar.Brand href="/">Medical Mail</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">All Reports</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl style={{width:'500px'}} type="text" placeholder="Search Reports" className="mr-sm-4" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </>
    )
}

export default HomeNav;