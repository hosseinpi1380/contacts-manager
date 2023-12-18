import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

//css file

import "./index.css";
import "./components/container/style.css";

import  MainLayout  from "./pages/MainLayout";
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
  <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  </ErrorBoundary>
);
