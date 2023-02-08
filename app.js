import React from "react"
import ReactDOM  from "react-dom/client"

const title =()=> (
    <h1>Title Invoked</h1>
);

const HeaderComponent =() =>  {
    return (
        <div>
            {title()}
            <h1>Learning React</h1>
            <h2>Creating Heading </h2>
            <ol className="ol">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ol>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)