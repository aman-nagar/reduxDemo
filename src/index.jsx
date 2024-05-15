// index.jsx
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter basename="/reduxDemo"> */}
    <App />
    {/* </BrowserRouter> */}
  </Provider>
);
