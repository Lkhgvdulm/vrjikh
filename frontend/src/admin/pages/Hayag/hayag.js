import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hayag_table from "../../components/Tables/Hayag/hayag_table";

const Hayag =() => {
    return(
        <div className="full">
        <div className="p-[10px] m-auto">
            <div className="flex">
                <div className="w-[300px] h-[full]">
                    <Sidebar />
                </div>
                <div className="w-full ml-[5px] bg-[#FAF8F8]">
                    <Hayag_table/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Hayag