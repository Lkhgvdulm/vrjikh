import React from 'react';
import Bidnii_tuhai_d from '../../components/bidnii_tuhai1/bidnii_tuhai_d/bidnii_tuhai_d';
import Udirdlaga_tuhai from '../../components/bidnii_tuhai1/udirdlaga_tuhai/udirdlaga_tuhai';
import Tsag from '../../components/bidnii_tuhai1/tsag/tsag';
import Header from '../../components/carousel/header/header';
import Footer from '../../components/carousel/footer/footer';
import './about.css';
const About_us = () => {
	return (
		<div className="about">
			<Header />
			<Bidnii_tuhai_d />
			<Udirdlaga_tuhai />
			{/* <Tsag /> */}
			<div className="FooterB">
				<Footer />
			</div>
		</div>
	);
};
export default About_us;
