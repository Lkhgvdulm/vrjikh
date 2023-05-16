import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Nuuuts_table from '../../components/Tables/Hunii_nuuuts/nuuts_table'

const Nuuuts =() => {
    return(
        <div className="full">
        <div className="p-[10px] m-auto">
            <div className="flex">
                <div className="w-[300px] h-[full]">
                    <Sidebar />
                </div>
                <div className="w-full ml-[5px] bg-[#FAF8F8]">
                    <Nuuuts_table />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Nuuuts