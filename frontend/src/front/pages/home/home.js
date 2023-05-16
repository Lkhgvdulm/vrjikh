import React from 'react';
import Banner_1 from '../../components/banner/home/banner_1/banner_1';
import Header from '../../components/carousel/header/header';
// import Value from '../../components/banner/home/value/value';
import Value from "../../components/banner/home/value/valuetest";
import Footer from '../../components/carousel/footer/footer';
import './home.css';
import Goal from '../../components/banner/home/goal/goal';

const Home = () => {
	return (
		<div>
			<Header />
			<Banner_1 />
			<Goal />
			<div className="Value">
				<Value />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
