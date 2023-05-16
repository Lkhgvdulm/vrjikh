import React from 'react';
import Header from '../../components/carousel/header/header';
import Ajil from '../../components/nuuts/ajil/ajil';
import Hunii_nuuts_ym from '../../components/nuuts/hunii_nuuts_ym/hunii_nuuts_ym';
import Logo from '../../components/nuuts/logo/logo';
import './hunii_nuuts.css';
import Footer from '../../components/carousel/footer/footer';

const Hunii_nuuts = () => {
	return (
		<div className="nuuts">
			<Header />
            <Hunii_nuuts_ym/>
			<Ajil/>
			<Logo/>
			<Footer/>
		</div>
        
	);
};
export default Hunii_nuuts;
