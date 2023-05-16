import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { FacebookEmbed } from 'react-social-media-embed';
import { CDNURL, url } from '../../../utils/url';
import axios from 'axios';
import './medeelel.css';

const Medeelel = () => {
	const [medee, setMedee] = useState([]);
	useEffect(() => {
		const getNews = async () => {
			const { data }  = await axios.get(`${url}/news`);
			
			setMedee(data.data);
		};
		getNews();
	}, []);
	return (
		<div>
			<div className="header_medeee">
				<div className="container_medee">
					<h3>МЭДЭЭ, МЭДЭЭЛЭЛ</h3>
					<div className="line_medee">
						<div className="line_8"></div>
					</div>
				</div>
			</div>
			<div className="Newss">
				<div className="News">
					<div className="Medee_list">
					{medee.map((row) =>(
						<div className="Medee_list_cards">
							<div>
								
									<img src={`${CDNURL}/${row.avatar}`} alt="/" />
								
							</div>
							<div className="text">
								<h3>
									<div>
										{/* {medee.map((row) => (
											<p>{row.name}</p>
										))} */}
										<p>{row.name}</p>
									</div>
								</h3>
								<br></br>
								<div className="date">
									{/* {medee.map((row) => (
										<h3>{row.description}</h3>
									))} */}
									<h3>{row.description}</h3>
								</div>
								<br></br>
								{/* <div className="more">
									<Link to="/delgerengui">Дэлгэрэнгүй</Link>
								</div> */}
							</div>
						</div>	
						))}				
					</div>

					<div className="Medee_facebook">
						<FacebookEmbed
							url="https://www.facebook.com/urjikhtavilgiindelguur/photos/pcb.216144357487276/216056360829409/"
							width={300}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Medeelel;
