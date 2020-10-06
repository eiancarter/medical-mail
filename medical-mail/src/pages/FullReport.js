import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// Styles
import { Card, Button } from 'react-bootstrap';

const FullReport = (props) => {

    const history = useHistory();

    return (
        <div>
            <Button variant="info" onClick={history.goBack}>Back</Button>
            <Link variant="info" to="/">All Reports</Link>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="info">Previous</Button>
                    <Button variant="info">Next</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default FullReport;