import React, { useEffect, useState } from 'react';
import { CDNURL, url } from '../../../../utils/url';
import axios from 'axios';
import './ajil.css';

const Ajil = () => {
	const [job, setJob] = useState([]);
	useEffect(() => {
		const getJob = async () => {
			const { data } = await axios.get(`${url}/workplace`);
			setJob(data.data);
		};
		getJob();
	}, []);
	return (
		<div>
			<div className="container_job">
				<div className="header_job">
					<h1 className='nas'>НЭЭЛТТЭЙ АЖЛЫН БАЙР</h1>
					<div className="line_menu_job">
						<div className="line_job"></div>
					</div>
				</div>
			</div>
			<div className="neg_tom">
				<div className="on_sar">
					<div className="tailbar_heseg">
						<p>2023.03.09</p>
					</div>
					<div className="line_bogino">
						<div className="line"></div>
					</div>
					<div className="tailbar_h">
						{job.map((row) => (
							<div className="zar">
								<p>{row.name}</p>
								<h3>{row.description}</h3>
							</div>
							))}
						</div>
					</div>
				</div>
			</div>
		
	);
};
export default Ajil;
