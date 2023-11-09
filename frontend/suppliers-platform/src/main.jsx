import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from './data/DataContext'
import '../global.css';
import '@fontsource/roboto'; 


import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <DataProvider>
    <RouterProvider router={Router} />
    </DataProvider>
  </>
)