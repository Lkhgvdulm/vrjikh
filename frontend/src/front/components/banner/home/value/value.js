import React, { useEffect, useState } from 'react';
import { CDNURL, url } from '../../../../../utils/url';
import axios from 'axios';
import './value.css';

const Value = () => {
	const [value, setValue] = useState([]);
	useEffect(() => {
		const getValue = async () => {
			const { data } = await axios.get(`${url}/values`);
			setValue(data.data);
		};
		getValue();
	}, []);
	return (
		<div>
			<div>
				<div className="container-1">
					<div className="header-1">
						<h1>БОДЛОГО</h1>
						<div class="line-menu">
							<div class="line-2"></div>
						</div>
						<div className="valuecards">
							<div className="valuecardcontainer">
								{value.map((row) => (
									<div className="valuecard">
										<img src={`${CDNURL}/${row.avatar}`} alt="/" />
										<p>{row.name}</p>
										<p>{row.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Value;
