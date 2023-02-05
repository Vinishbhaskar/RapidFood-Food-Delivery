const heading = React.createElement("h1",{
    id:"title",
    style:{
    // width:"auto",
    // height:"auto",
    // position:"relative",
    margin:"0px",
    backgroundColor: "lightBlue",
    color: "red",
    padding: "30px",
    // border:"5px dotted blue",
    borderBottom:"5px solid orange",
    fontFamily: "ubuntu",
    textAlign: "center",}
    // textDecoration: "underline",
    // textDecorationColor: "grey"}
},"Learn React Creatively")
console.log(heading)

const root =  ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)