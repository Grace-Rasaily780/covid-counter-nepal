import React from 'react';

const TotalDiv = ({ title, count, today }) => {
    return (
        <div className="total-div">
            <h4>{title}</h4>

            <span className="text-danger">{count}</span>
            <br />
            <small className="ml-2">{today ? today : ''}</small>
        </div>
    );
};

export default TotalDiv;
