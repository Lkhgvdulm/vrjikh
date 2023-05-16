import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from '../../components/Views/Dashboard/Dashboard';

const Admin = () => {
	const navigate = useNavigate();
	const [pageTitle, setPageTitle] = useState('Нүүр хуудас');
	React.useEffect(() => {
		switch (window.location.pathname) {
			case '/admin/dashboard':
				setPageTitle('Нүүр хуудас');
				break;
		}
	});
	return (
		<div className="w-full h-screen">
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
};

export default Admin;
