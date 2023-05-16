import React, { useState, useEffect } from 'react';
import { CDNURL, url } from '../../../../../utils/url';
import axios from 'axios';
import './goal.css';

const Goals = () => {
	const [goals, setGoals] = useState([]);
	useEffect(() => {
		const getGoals = async () => {
			const { data } = await axios.get(`${url}/goals`);
			setGoals(data.data);
		};
		getGoals();
	}, []);
	return (
		<div>
			<div className="container">
				<div className="header">
					<h1>КОМПАНИЙН ЗОРИЛГО</h1>
					<div class="line-menu">
						<div class="line-1"></div>
					</div>
					<br></br>
					{goals.map((row) => (
						<div className="tailbar-2">
							<p>{row.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Goals;
