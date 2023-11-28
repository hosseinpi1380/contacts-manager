import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

//css file
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import "./components/container/style.css";

import { MainLayout } from "./components/pages/index";
import { ThemeProvider } from "./context/useContext";

const ErrorFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>مشکلی پیش امده است.</p>
      <h1>{error}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
