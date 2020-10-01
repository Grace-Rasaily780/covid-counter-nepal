import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TotalDiv from './TotalDiv.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Total = () => {
	const [total, setTotal] = useState('Loading..');
	const [active, setActive] = useState('Loading..');
	const [death, setDeath] = useState('Loading..');
	const [recovered, setRecovered] = useState('Loading..');
	const [today, setToday] = useState([]);
	const [todayDeath, setTodayDeath] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			axios.get('https://coronavirus-19-api.herokuapp.com/countries/nepal')
				.then(res => {
					var getData = res.data

					setTotal(getData.cases);
					setActive(getData.active);
					setDeath(getData.deaths);
					setRecovered(getData.recovered);

					setToday(getData.todayCases);
					setTodayDeath(getData.todayDeaths);
					// console.log(getData)
				})
				.catch(error => {
					alert(error);
				});
		}
		fetchData();
	})

	return (
		<div className="container my-5 total text-center">
			<h3 className="text-center">Covid-19 Count of Nepal</h3>

			<hr />

			<div className="row mb-3 mt-4">
				<div className="col-md-6 col-10 mx-auto my-2">

					<TotalDiv title={"Total" + " Cases"} count={total} today={'+' + today + ' cases'} />
				</div>
			</div>

			<div className="row">
				<div className="col-md-4 col-10 mx-auto my-2">

					<TotalDiv title={"Active" + " Cases"} count={active} />
				</div>

				<div className="col-md-4 col-10 mx-auto my-2">

					<TotalDiv title="Death" count={death} today={'+' + todayDeath} />
				</div>

				<div className="col-md-4 col-10 mx-auto my-2">

					<TotalDiv title="Recovered" count={recovered} />
				</div>
			</div>
		</div>
	);
};

export default Total;
