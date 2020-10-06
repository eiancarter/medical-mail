import React, { useEffect } from 'react';
// Bootstrap
import { Form, FormControl } from 'react-bootstrap';
// Report Data

const Search = (props) => {

    const {reports, setResults, input, setInput} = props;

    const handleChange = e => {
        setInput(e.target.value)
    };

    useEffect(() => {
        const filteredReports = reports.filter(report => {
            const tags = report.labels;
            for (let i=0; i < tags.length; i++) {
                if (tags[i].includes(input)) {
                    return report
                }
            }
            return report.preview.toLowerCase().includes(input)
        });
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