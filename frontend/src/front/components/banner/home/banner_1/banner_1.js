import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { CDNURL, url } from '../../../../../utils/url';
import axios from 'axios';
import './banner.css';

const Banner_1 = () => {
	const [slider, setSlider] = useState([]);
	useEffect(() => {
		const getBanner = async () => {
			const { data } = await axios.get(`${url}/banner`);
			setSlider(data.data);
		};
		getBanner();
	}, []);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Slider {...settings}>
				{slider.map((row) =>
						row.orders === 1 && (
							<div className="w-full h-[500px] ">
								<img
									className="w-full h-[500px] object-cover"
									src={`${CDNURL}/${row.avatar}`}
									alt="/"
								/>
							</div>
						)
				)}
			</Slider>
		</div>
	);
};
export default Banner_1;
