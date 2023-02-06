import React from "react"
import ReactDOM  from "react-dom/client"

const heading1 = React.createElement("h2",{
    id:"title",
    style:{
        width:"auto",
        height:"auto",
        position:"relative",
        margin:"0px",
        backgroundColor: "black",
        color: "red",
        padding: "20px",
        // border:"5px dotted blue",
        borderBottom:"5px solid orange",
        fontFamily: "roboto",
        textAlign: "center",
        // textDecoration: "underline",
        // textDecorationColor: "white"
    }
},"Learn React Creatively")

const list1 = React.createElement("li",{
    id:"list"
},"List 1")

const list2 = React.createElement("li",{
    id:"list"
},"List 2")

const list3 = React.createElement("li",{
    id:"list"
},"List 3")



const heading = React.createElement("div",{
    id:"container",
},[heading1, list1,list2,list3])
console.log(heading)

const root =  ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)