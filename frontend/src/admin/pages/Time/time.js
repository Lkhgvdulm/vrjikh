import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Time_table from '../../components/Tables/Time/time_table';

const Time =() => {
    return(
        <div className="full">
        <div className="p-[10px] m-auto">
            <div className="flex">
                <div className="w-[300px] h-[full]">
                    <Sidebar />
                </div>
                <div className="w-full ml-[5px] bg-[#FAF8F8]">
                    <Time_table />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Time