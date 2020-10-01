import React, { useState } from 'react';
import axios from 'axios';
import GenderDiv from './GenderDiv.js';

const Gender = () => {
	const [casesMale, setCasesMale] = useState([]);
	const [casesFemale, setCasesFemale] = useState([]);
	const [casesOther, setCasesOther] = useState([]);

	const [activeMale, setActiveMale] = useState([]);
	const [activeFemale, setActiveFemale] = useState([]);
	const [activeOther, setActiveOther] = useState([]);

	const [deathMale, setDeathMale] = useState([]);
	const [deathFemale, setDeathFemale] = useState([]);
	const [deathOther, setDeathOther] = useState([]);

	const [recoveredMale, setRecoveredMale] = useState([]);
	const [recoveredFemale, setRecoveredFemale] = useState([]);
	const [recoveredOther, setRecoveredOther] = useState([]);

	const fetchData = () => {
		axios.get('https://data.nepalcorona.info/api/v1/covid/summary')
			.then(res => {
				var getData = res.data;

				setCasesFemale(getData.gender.cases[0].count + getData.gender.cases[3].count);
				setCasesMale(getData.gender.cases[1].count + getData.gender.cases[2].count);
				setCasesOther(getData.gender.cases[4].count);

				setActiveFemale(getData.gender.active[0].count);
				setActiveMale(getData.gender.active[1].count);
				if (getData.gender.active[2] == null) {
					setActiveOther(0);
				} else {
					setActiveOther(getData.gender.active[2].count);
				}

				setDeathFemale(getData.gender.deaths[1].count);
				setDeathMale(getData.gender.deaths[2].count);
				setDeathOther(getData.gender.deaths[0].count);

				setRecoveredFemale(getData.gender.recovered[0].count + getData.gender.recovered[3].count);
				setRecoveredMale(getData.gender.recovered[1].count + getData.gender.recovered[2].count);
				setRecoveredOther(getData.gender.recovered[4].count)
				console.log(res.data)
			})



	}
	fetchData();
	return (
		<div className="container my-5 text-center gender">
			<h3 className="text-center">Covid-19 Count of Nepal By Gender</h3>

			<hr />

			<div className="row my-5">
				<div className="col-md-6 col-12 mx-auto my-2">
					<GenderDiv
						gender="Female"
						cases={casesFemale}
						active={activeFemale}
						death={deathFemale}
						recovered={recoveredFemale}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<GenderDiv
						gender="Male"
						cases={casesMale}
						active={activeMale}
						death={deathMale}
						recovered={recoveredMale}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<GenderDiv
						gender="Others"
						cases={casesOther}
						active={activeOther}
						death={deathOther}
						recovered={recoveredOther}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gender;
