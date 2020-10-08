import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Styles
import { Card, Button, Spinner } from 'react-bootstrap';

const FullReport = ({results, filters, setFilters}) => {
    const params = useParams();
    const [ currentReportIndex, setCurrentReportIndex ] = useState();
    console.log(results);

    useEffect(() => {
        let labels = results[params.id].labels;
        setFilters(labels)
    },[currentReportIndex, results]);

    function nextReport(){
        if (currentReportIndex < results.length - 1) {
            setCurrentReportIndex(currentReportIndex + 1)
        } else {
            setCurrentReportIndex(currentReportIndex)
        }
        return currentReportIndex
    };

    function previousReport(){
        if (currentReportIndex > 0) {
            setCurrentReportIndex(currentReportIndex - 1)
        } else {
            setCurrentReportIndex(currentReportIndex)
        }
        return currentReportIndex
    };

    function removeTag(){
        return results[currentReportIndex].labels.splice(currentReportIndex)
    };

    return (
        <div>
            {!results || !results[currentReportIndex] ? <Spinner /> : 
                <Card className="text-center">
                    <Card.Header>Report ID: #{results[currentReportIndex].id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Content:</Card.Title>
                        <Card.Text>
                            {results[currentReportIndex].preview}
                        </Card.Text>
                        <Card.Text>
                            Active Tags:
                            {results[currentReportIndex].labels.map(label => <Button key={label} onClick={removeTag} variant="secondary">{label}</Button>)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button disabled={currentReportIndex === 0} onClick={previousReport} variant="info">Previous</Button>
                        {'  '}
                        <Button disabled={currentReportIndex === results.length - 1} onClick={nextReport} variant="info">Next</Button>
                    </Card.Footer>
                </Card>
            }
        </div>
    )
}

export default FullReport;