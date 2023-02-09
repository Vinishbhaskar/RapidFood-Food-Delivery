import React from "react"
import ReactDOM  from "react-dom/client"

const Header =()=> {
    return (
        <h1> Food Delivery App</h1>
    )
}

const MainBody =()=> {
    return (
        <h1> Food Delivery App</h1>
    )
}

const Footer =()=> {
    return (
        <h1> Footer </h1>
    )
}



const AppLayout =() =>  {
    return (
        <>
            <Header/>
            <MainBody />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)