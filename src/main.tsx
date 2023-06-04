import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes.tsx";
import Header from "./common/Header.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";
import SearchBar from "./components/SearchBar.tsx";
import ScrollToTop from "./common/helpers/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <SearchBar />
        <AppRoutes />
      </BrowserRouter>
    </FilterProvider>
  </React.StrictMode>
);
