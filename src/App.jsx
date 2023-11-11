import React, { Suspense, useState } from "react"
import Hero from "./helper/Hero";
import { ErrorBoundary } from "react-error-boundary";

import { Helmet, HelmetProvider } from 'react-helmet-async';
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <p>مشکلی بس ساده پیش امده </p>
      <button onClick={resetErrorBoundary}>reset</button>
    </div>
  )
}
function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>دوره جامع ریکت</title>
        </Helmet>
        <div className="app">
          {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Hero heroName='joker' />
          </ErrorBoundary> */}
        </div>
      </HelmetProvider>
    </>
  )
};
export default App;
