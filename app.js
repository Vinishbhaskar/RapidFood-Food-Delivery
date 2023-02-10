import React from "react"
import ReactDOM  from "react-dom/client"
import HeaderComponent from "./Header"
import { MainBody } from "./MainBody";
import Footer from "./Footer.js"


const AppLayout =() =>  {
    return (
        <>
            <HeaderComponent/>
            <MainBody />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)