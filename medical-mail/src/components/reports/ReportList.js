import React from 'react';
// Bootstrap
import { Table } from 'react-bootstrap';

const ReportList = () => {
    return (
        <div style={{background:'blue'}}>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>ID</th>
                <th>Report Name</th>
                <th>Preview</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button>view report</button></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><button>view report</button></td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>tesxt</td>
                <td><button>view report</button></td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default ReportList;