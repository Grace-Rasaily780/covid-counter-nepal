import React from 'react';

const ProvinceDiv = ({province , active, death, recovered, cases }) => {


    return (
        <div className="province-div">
        	<h4>Province {province}</h4>
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

export default ProvinceDiv;
