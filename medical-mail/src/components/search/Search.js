import React, { useEffect } from 'react';
// Bootstrap
import { Form, FormControl } from 'react-bootstrap';
// Report Data

const Search = ({reports, setResults, input, setInput}) => {

    const handleChange = e => {
        setInput(e.target.value)
    };

    useEffect(() => {
        const filteredReports = reports.filter(report => 
            report.preview.toLowerCase().includes(input)    
        );
        setResults(filteredReports);
    }, [input, reports]);

    return (
        <Form inline>
            <FormControl 
                style={{width:'500px'}} 
                type="text" 
                placeholder="Search Reports" 
                className="mr-sm-4" 
                value={input}
                onChange={handleChange}
            />
        </Form>
    )
}

export default Search;