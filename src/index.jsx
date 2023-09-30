// import React from "react";
// import { createRoot } from "react-dom/client";
// import { App } from "./App.jsx";
// import "./App.scss";
// import { HashRouter as Router } from "react-router-dom";


// const root = document.getElementById("root");
// const rootElement = createRoot(root);

// rootElement.render(
//     <React.StrictMode>
//         <Router>
//             <App />
//         </Router>
//     </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import { App } from "./App.jsx";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
