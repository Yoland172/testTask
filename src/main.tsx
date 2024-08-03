import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={5000}/>
  </BrowserRouter>
  </Provider>
);
