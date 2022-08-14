import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>oops !!</h1>
            <Link to="/">Back Home</Link>
        </div>
    );
};

export default Error;
