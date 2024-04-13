import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/*const anotherElement = (
  <a href="http://www.google.com">click me to visit google</a>
);
*/

const anotherUser = "chai aur code";
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
  },
  "click me to visit google",
  anotherUser
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
