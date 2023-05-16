import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';

import './Sidebar.css';
const Sidebar = () => {
	return (
		<div className="Sidebar_Container">
			<div className="Sidebar_Menu">
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<span className="Sidebar_Menu_list">
							<Link to={'/admin/dashboard'}> Хянах самбар </Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/banner'}>Баннер</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/Goals'}>Зорилго</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/Value'}>Бодлого</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/tednii_tuhai'}>Бидний тухай</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/directors'}>Удирдлага</Link>
						</span>
					</span>
				</div>
				{/* <div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/time'}>fghjkl</Link>
						</span>
					</span>
				</div> */}
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/nuuuts'}>Хүний нөөц</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/ajliin_bair'}>Ажлын байр</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/logo'}>Лого</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/medee'}>Мэдээ</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/hayag'}>Хаяг байршил</Link>
						</span>
					</span>
				</div>
				<div className="Sidebar_MenuButton">
					<span className="Sidebar_MenuSpan">
						<div className="Sidebar_Menu_span_icon"></div>
						<span className="Sidebar_Menu_list">
							<Link to={'/dashboard/task'}>Зорилт</Link>
						</span>
					</span>
				</div>
				
			</div>
		</div>
	);
};

export default Sidebar;
