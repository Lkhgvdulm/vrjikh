import React from "react";
import Header from "../../components/carousel/header/header";
import Holboo_barih from "../../components/Holboo_barih/holboo_barih";
import Footer from "../../components/carousel/footer/footer";
import "./contact_us.css"

const Contact_us =() =>{
    return(
        <div className="hi">
            <Header/>
            <Holboo_barih/>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Contact_us