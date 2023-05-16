import React, { useEffect, useState } from 'react';
import { CDNURL, url } from '../../../../utils/url';
import axios from 'axios';
import './udirdlaga.css';

const Udirdlaga_tuhai = () => {
	const [directors, setDirectors] = useState([]);
	useEffect(() => {
		const getDirectors = async () => {
			const { data } = await axios.get(`${url}/Director`);
			setDirectors(data.data);
			console.log('check', data);
		};
		getDirectors();
	});
	return (
		<div>
			<div className="container_3">
				<div className="header_3">
					<h1>УДИРДЛАГА</h1>
					<div class="line-menu">
						<div class="line_3"></div>
					</div>
					<br></br>
					<div className="row-us">
						{directors.map((row) => (
							<div className="column-us">
								<div className="about-card-us">
									<img src={`${CDNURL}/${row.avatar}`} alt="/" />
									<h3>{row.name}</h3>
									<p>{row.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Udirdlaga_tuhai;
