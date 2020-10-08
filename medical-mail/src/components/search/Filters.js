import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// Bootstrap
import { Button } from 'react-bootstrap';

const Filters = ({results}) => {

    const history = useHistory();
    const { reportId } = useParams();

    return (
        <div style={{display:'flex', justifyContent:'center', margin:'6px', padding:'4px'}}>
            <div style={{width:'100%', display:'flex', justifyContent:'flexStart'}}>
                <Button style={{alignContent:'left'}} variant="info" onClick={history.goBack}>Back</Button>
            </div>
            <p style={{margin:'0', display:'flex', alignItems:'center'}}>Filters:</p>
            <Button onClick={{}} style={{margin:'4px'}} variant='secondary'>#goodreport(1)</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#conditionpresent(2)</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#saved</Button>
            <Button style={{margin:'4px'}} variant='secondary'>#hello</Button>
        </div>
    )
}

export default Filters;