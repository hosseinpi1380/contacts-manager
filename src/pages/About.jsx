import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary';
import SwiperC from '../components/SwiperC';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <p>مشکلی بس ساده پیش امده </p>
      <button onClick={resetErrorBoundary}>reset</button>
    </div>
  )
}
const About = () => {

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Helmet>
            <title>دوره جامع ریکت || درباره</title>
          </Helmet>
          <div className="about">
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>

          </div>
          <SwiperC ></SwiperC>
        </HelmetProvider>
      </ErrorBoundary>
    </>
  )
}

export default About