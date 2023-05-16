import React, { useEffect, useState } from 'react';
import './bidnii_tuhai_d.css';
import { CDNURL, url } from '../../../../utils/url';
import axios from 'axios';

const Bidnii_tuhai_d = () => {
	const [about, setAbout] = useState([]);
	useEffect(() => {
		const getAbout = async () => {
			const { data } = await axios.get(`${url}/about`);
			console.log('shalgah', data);
			setAbout(data.data);
		};
		getAbout();
	}, []);
	return (
		<div>
			<div className="container_1">
				<div className="header_1">
					<h1>КОМПАНИЙН ДОТООД БҮТЭЦ</h1>
					<div className="line-3">
						<div className="line-menu3"></div>
					</div>
				</div>
			</div>
			<div className="row">
				{about.map((row) => (
					<div className="column">
						<div className="about-card">
							<h2>{row.name}</h2>
							<p>{row.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Bidnii_tuhai_d;
