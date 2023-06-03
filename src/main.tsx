import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes.tsx";
import Header from "./common/Header.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>
);
