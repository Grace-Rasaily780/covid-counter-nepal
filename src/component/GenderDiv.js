import React from 'react';

const GenderDiv = ({ gender, active, death, recovered, cases }) => {
    return (
         <div className="gender-div">
        	<h4>{gender}</h4>
            <hr />
        	<h5 className="mt-3">Total Cases: <span className="text-danger">{cases}</span></h5>
        	<div className="row">
        		<div className="col-4 mx-auto">
        			<h5 className="mt-3">Active</h5>
        			<span className="text-danger">{active}</span>
        		</div>

        		<div className="col-4 mx-auto">
        			<h5 className="mt-3">Death</h5>
        			<span className="text-danger">{death}</span>
        		</div>

        		<div className="col-4 mx-auto">
        			<h5 className="mt-3">Recovered</h5>
        			<span className="text-danger">{recovered}</span>
        		</div>
        	</div>
            <hr />
        </div>
    );
};

export default GenderDiv;
