import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tednii_tuhai from '../../components/Tables/tednii_tuhai/tednii_tuhai';

const Tednii_tuhai_ym =() => {
    return(
        <div className="full">
			<div className="p-[10px] m-auto">
				<div className="flex">
					<div className="w-[300px] h-[full]">
						<Sidebar />
					</div>
					<div className="w-full ml-[5px] bg-[#FAF8F8]">
						<Tednii_tuhai />
					</div>
				</div>
			</div>
		</div>
    )
}
export default Tednii_tuhai_ym