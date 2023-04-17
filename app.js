const heading = React.createElement(
  "h1",
  { id: "heading1" }, //attribute  which comes inside props
  "Hello world from react"
); //children which comes inside props

console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
 [ { id: "parent" },
 React.createElement(
   "div",
   { id: "child1" },
   [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
 ),
 { id: "parent" },
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am a h1 tag"), React.createElement("h2", {}, "I am a h2 tag")]
  )]
);
console.log(parent)
root.render(parent);
