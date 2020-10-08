import React from 'react';
import { Link } from 'react-router-dom'
// Bootstrap
import { Table, Button } from 'react-bootstrap';

const ReportList = ({results, input}) => {

    function renderTags(tags){
        if (tags.length > 0) {
            return (
            <td>{tags.map(tag => <Button key={tag} variant="info">{tag}</Button>)}</td>
            )
        } else {
            return <td>No tags.</td>
        }
    }

    function showResults() {
        if (input.length > 0 && results.length === 0) {
            return <span>No results exist for that search term.</span>
        } else {
            return (
                results.map(report => {
                    return (
                        <tbody key={report.id}>
                            <tr>
                                <td>{report.id}</td>
                                <td>{report.preview}</td>
                                {renderTags(report.labels)}
                                <td><Link exact={true} to={`/${report.id}`} variant="outline-info">view report</Link></td>
                            </tr>
                        </tbody>
                    )
                })
            )
        }
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Report Preview</th>
                    <th>Tags</th>
                    <th>Link</th>
                    </tr>
                </thead>
                {showResults()}
            </Table>
        </div>
    )
}

export default ReportList;