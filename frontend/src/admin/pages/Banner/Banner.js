import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Banner_Table from '../../components/Tables/banner/banner_table';

const Banner = () => {
	return (
		<div className="full">
			<div className="p-[10px] m-auto">
				<div className="flex">
					<div className="w-[300px] h-[full]">
						<Sidebar />
					</div>
					<div className="w-full ml-[5px] bg-[#FAF8F8]">
						<Banner_Table />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
