import React from 'react';
// Bootstrap
import { Button } from 'react-bootstrap';

const Filters = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', margin:'6px', padding:'4px'}}>
            <p style={{margin:'0', display:'flex', alignItems:'center'}}>Filters:</p>
            <Button style={{margin:'4px'}} variant='secondary'>#goodreport(1)</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#conditionpresent(2)</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#saved</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#hello</Button>
        </div>
    )
}

export default Filters;