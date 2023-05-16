import React, { useEffect, useState } from 'react';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { IoCallSharp } from 'react-icons/io5';
import { BiAt } from 'react-icons/bi';
import { CDNURL, url } from '../../../utils/url';
import './holboo_barih.css';
import axios from 'axios';

const Holboo_barih = () => {
	const [address, setAddress] = useState([]);
	useEffect(() => {
		const getAddress = async () => {
			const { data } = await axios.get(`${url}/address`);
			console.log('ds',data);
			setAddress(data.data);
		};
		getAddress();
	}, [])
	return (
		<div>
			<div className="contact_container">
				<div className="contact_h">
					<h3>ХОЛБОО БАРИХ</h3>
					<div className="line_c">
						<div className="line_contact"></div>
					</div>
				</div>
			</div>
			<div className="maps_container">
				<div className="maps_header">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10699.827975750388!2d106.90271089580077!3d47.89851768383008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smn!4v1681469517167!5m2!1sen!2smn"
						width="600"
						height="450"
						frameborder="0"
						style={{ border: 0 }}
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
					></iframe>
				</div>
				<div className="maps_hayg">

					<ul>
						<li>
							<BsFillGeoAltFill className="map" />
							<h4>
							Улаанбаатар хот БГД 4-р хороо
								<br></br>
								''Golden Park '' хотхоны 106-р байр
							</h4>
						</li>
						<li>
							<br></br>
							<IoCallSharp className="utas" />
							<h4>(+976) 86101605</h4>
						</li>
						<li>
							<br></br>
							<BiAt className="at" />
							<h4>www.urjihtengis@gmail.com</h4>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Holboo_barih;
