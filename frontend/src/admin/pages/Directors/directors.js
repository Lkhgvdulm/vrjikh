import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Directors_table from '../../components/Tables/Directors/directors_table';

const Directors =() => {
    return(
        <div className="full">
        <div className="p-[10px] m-auto">
            <div className="flex">
                <div className="w-[300px] h-[full]">
                    <Sidebar />
                </div>
                <div className="w-full ml-[5px] bg-[#FAF8F8]">
                    <Directors_table />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Directors