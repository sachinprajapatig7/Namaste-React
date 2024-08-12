/*

<div id="parent">
    <div id="child">
       <h1>I am a h1 tag </h1>
       <h2>I am a h2 tag </h2> // Sibling
    </div>
    <div id="child2">
       <h1>I am a h1 tag </h1>
       <h2>I am a h2 tag </h2> // Sibling
    </div>
</div>

  ReactElement(Object) => HTML(Browser Understand)
*/

const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},
        [
            React.createElement("h1", {}, "I am a h1 tag"),
            React.createElement("h2", {}, "I am a h2 tag")
        ]),
        React.createElement("div", {id: "child2"},
            [
                React.createElement("h1", {}, "I am a h1 tag"),
                React.createElement("h2", {}, "I am a h2 tag")
        ])
   ]
);

// To solve above hectic code JSX comes in



// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz: "abc"}, 
//     "Hello World from React!"
// );

// console.log(heading); // Object
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);