import React, { useEffect, useState } from 'react';
import { CDNURL, url } from '../../../../utils/url';
import axios from 'axios';
import './logo.css';

const Logo = () => {
	const [slider, setSlider] = useState([]);
	useEffect(() => {
		const getLogo = async () => {
			const { data } = await axios.get(`${url}/logo`);
			console.log(data);
			setSlider(data.data);
		};
		getLogo();
	}, []);
	return (
		<div className="container_buh">
			{slider.map((row) => (
				<div className="header_buh">
					<img src={`${CDNURL}/${row.avatar}`} />
				</div>
			))}
		</div>
	);
};
export default Logo;
