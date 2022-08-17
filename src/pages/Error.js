import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>oops !!</h1>
            <Link to="/" className="btn error-btn">
                Back Home
            </Link>
        </div>
    );
};

export default Error;
