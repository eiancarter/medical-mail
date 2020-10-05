import React from 'react';
import { Link } from 'react-router-dom'
// Components
import ReportCard from './ReportCard';
// Bootstrap
import { Table, Button, Pagination } from 'react-bootstrap';

const ReportList = ({results, input}) => {

    let active = 1;
    let items = [];

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                <Button onClick={''} variant="outline-info">{number}</Button>
            </Pagination.Item>
        )
    }

    function showResults() {
        if (input.length > 0 && results.length === 0) {
            return <span>No results exist for that search term.</span>
        } else {
            return (
                results.map(report => {
                    return (
                        <tbody>
                            <tr>
                                <td>{report.id}</td>
                                <td>{report.preview}</td>
                                <td>#example tag</td>
                                <td><Link to={`/${report.id}`} variant="outline-info">view report</Link></td>
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
            <div>
                <Pagination style={{display:'flex', justifyContent:'center'}}>{items}</Pagination>
            </div>
        </div>
    )
}

export default ReportList;