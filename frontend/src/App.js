import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './admin/pages/Admin';
import Home from './front/pages/home/home';
import Login from './front/pages/auth/Login/Login';
import About_us from './front/container/About_us/about';
import Hunii_nuuts from './front/container/hunii_nuuts/hunii_nuuts';
import Medee_medeelel from './front/container/medee_medeelel/medee_medeelel';
import Contact_us from './front/container/Contact_us/contact_us';
import Delgerengui from './front/components/Medeelel/Delgerengui/delgerengui';

// Admin Page Import Ehlel

import Banner from './admin/pages/Banner/Banner';
import Goals from './admin/pages/Goals/goals_table';
import Value from './admin/pages/Value/value';
import Tednii_tuhai from './admin/pages/Tednii_tuhai/tednii_tuhai'
import Directors from './admin/pages/Directors/directors'
import Time from './admin/pages/Time/time';
import Nuuuts from './admin/pages/Nuuuts/nuuuts';
import Ajliin_bair from './admin/pages/Ajliin_bair/ajliin_bair';
import Logo from './admin/pages/Logo/logo';
import Medee from './admin/pages/Medee/medee';
import Hayag from './admin/pages/Hayag/hayag';
import Zorilt from './admin/pages/Zorilt/zorilt';

// Admin Page Import Tugsgul

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/*" element={<Admin />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/bidnii_tuhai" element={<About_us />} />
				<Route path="/hunii_nuuts" element={<Hunii_nuuts />} />
				<Route path="/medee_medeelel" element={<Medee_medeelel />} />
				<Route path="/holboo_barih" element={<Contact_us />} />
				<Route path="/delgerengui" element={<Delgerengui />} />
				{/* Admin Panel Route ehlel */}
				<Route path="/dashboard/banner" element={<Banner />} />
				<Route path="/dashboard/Goals" element={<Goals />} />
				<Route path="/dashboard/Value" element={<Value />} />
				<Route path="/dashboard/tednii_tuhai" element={<Tednii_tuhai />} />
				<Route path="/dashboard/directors" element={<Directors />} />
				<Route path="/dashboard/time" element={<Time />} />
				<Route path="/dashboard/nuuuts" element={<Nuuuts />} />
				<Route path="/dashboard/ajliin_bair" element={<Ajliin_bair />} />
				<Route path="/dashboard/logo" element={<Logo />} />
				<Route path="/dashboard/Medee" element={<Medee />} />
				<Route path="/dashboard/hayag" element={<Hayag />} />
				<Route path="/dashboard/task" element={<Zorilt />} />

				{/* Admin Panel Route tugsgul */}
			</Routes>
		</BrowserRouter>
	);
}
export default App

