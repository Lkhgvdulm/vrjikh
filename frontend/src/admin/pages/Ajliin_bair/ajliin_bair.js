import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Ajil_table from "../../components/Tables/Ajliin_bair/ajil_table";

const Ajliin_bair =() => {
    return(
        <div className="full">
			<div className="p-[10px] m-auto">
				<div className="flex">
					<div className="w-[300px] h-[full]">
						<Sidebar />
					</div>
					<div className="w-full ml-[5px] bg-[#FAF8F8]">
						<Ajil_table />
					</div>
				</div>
			</div>
		</div>
    )
}
export default Ajliin_bair