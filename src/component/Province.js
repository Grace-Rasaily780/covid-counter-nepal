import React, { useState } from 'react';
import axios from 'axios';
import ProvinceDiv from './ProvinceDiv.js';

const Provice = () => {
	const [province1, setProvince1] = useState('Loading..');
	const [province2, setProvince2] = useState('Loading..');
	const [province3, setProvince3] = useState('Loading..');
	const [province4, setProvince4] = useState('Loading..')
	const [province5, setProvince5] = useState('Loading..');
	const [province6, setProvince6] = useState('Loading..');
	const [province7, setProvince7] = useState('Loading..');

	const [cases1, setCases1] = useState('Loading..');
	const [cases2, setCases2] = useState('Loading..');
	const [cases3, setCases3] = useState('Loading..');
	const [cases4, setCases4] = useState('Loading..');
	const [cases5, setCases5] = useState('Loading..');
	const [cases6, setCases6] = useState('Loading..');
	const [cases7, setCases7] = useState('Loading..');

	const [death1, setDeath1] = useState('Loading..');
	const [death2, setDeath2] = useState('Loading..');
	const [death3, setDeath3] = useState('Loading..');
	const [death4, setDeath4] = useState('Loading..');
	const [death5, setDeath5] = useState('Loading..');
	const [death6, setDeath6] = useState('Loading..');
	const [death7, setDeath7] = useState('Loading..');

	const [active1, setActive1] = useState('Loading..');
	const [active2, setActive2] = useState('Loading..');
	const [active3, setActive3] = useState('Loading..');
	const [active4, setActive4] = useState('Loading..');
	const [active5, setActive5] = useState('Loading..');
	const [active6, setActive6] = useState('Loading..');
	const [active7, setActive7] = useState('Loading..');

	const [recovered1, setRecovered1] = useState('Loading..');
	const [recovered2, setRecovered2] = useState('Loading..');
	const [recovered3, setRecovered3] = useState('Loading..');
	const [recovered4, setRecovered4] = useState('Loading..');
	const [recovered5, setRecovered5] = useState('Loading..');
	const [recovered6, setRecovered6] = useState('Loading..');
	const [recovered7, setRecovered7] = useState('Loading..');


	const fetchData = () => {
		axios.get('https://data.nepalcorona.info/api/v1/covid/summary')
			.then(res => {
				var getData = res.data
				setProvince1(getData.province.cases[3].province);
				setProvince2(getData.province.cases[6].province);
				setProvince3(getData.province.cases[5].province);
				setProvince4(getData.province.cases[2].province);
				setProvince5(getData.province.cases[1].province);
				setProvince6(getData.province.cases[0].province);
				setProvince7(getData.province.cases[4].province);

				setCases1(getData.province.cases[3].count);
				setCases2(getData.province.cases[6].count);
				setCases3(getData.province.cases[5].count);
				setCases4(getData.province.cases[2].count);
				setCases5(getData.province.cases[1].count);
				setCases6(getData.province.cases[0].count);
				setCases7(getData.province.cases[4].count);


				setDeath1(getData.province.deaths[5].count);
				setDeath2(getData.province.deaths[3].count);
				setDeath3(getData.province.deaths[6].count);
				setDeath4(getData.province.deaths[0].count);
				setDeath5(getData.province.deaths[2].count);
				setDeath6(getData.province.deaths[1].count);
				setDeath7(getData.province.deaths[4].count);

				setActive1(getData.province.active[4].count);
				setActive2(getData.province.active[2].count);
				setActive3(getData.province.active[3].count);
				setActive4(getData.province.active[0].count);
				setActive5(getData.province.active[1].count);
				setActive6(getData.province.active[6].count);
				setActive7(getData.province.active[5].count);

				setRecovered1(getData.province.recovered[3].count);
				setRecovered2(getData.province.recovered[6].count);
				setRecovered3(getData.province.recovered[5].count);
				setRecovered4(getData.province.recovered[2].count);
				setRecovered5(getData.province.recovered[1].count);
				setRecovered6(getData.province.recovered[0].count);
				setRecovered7(getData.province.recovered[4].count);
				// console.log(res.data.province)
			})




	}
	fetchData();

	return (
		<div className="container my-5 province text-center">
			<h3 className="text-center">Covid-19 Count of Nepal By Province</h3>

			<hr />

			<div className="row my-5">


				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province1}
						death={death1}
						active={active1}
						recovered={recovered1}
						cases={cases1}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province2}
						death={death2}
						active={active2}
						recovered={recovered2}
						cases={cases2}
					/>
				</div>


				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province3}
						death={death3}
						active={active3}
						recovered={recovered3}
						cases={cases3}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province4}
						death={death4}
						active={active4}
						recovered={recovered4}
						cases={cases4}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province5}
						death={death5}
						active={active5}
						recovered={recovered5}
						cases={cases5}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province6}
						death={death6}
						active={active6}
						recovered={recovered6}
						cases={cases6}
					/>
				</div>

				<div className="col-md-6 col-12 mx-auto my-2">
					<ProvinceDiv
						province={province7}
						death={death7}
						active={active7}
						recovered={recovered7}
						cases={cases7}
					/>
				</div>


			</div>
		</div>
	);
};

export default Provice;
