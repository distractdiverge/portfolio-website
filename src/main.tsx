import * as React from 'react';
import { useEffect } from 'react'; // Added for PageViewTracker
import * as ReactDOM from 'react-dom/client';
import './index.css';
import About from './routes/About.tsx';
import Contact from './routes/Contact.tsx';
import Experience from './routes/Experience.tsx';
import Projects from './routes/Projects.tsx';
import EducationAndSkills from './routes/EducationAndSkills.tsx';
import HeaderComponent from './components/header.tsx';
import FooterComponent from './components/footer.tsx';
import ReactGA from 'react-ga4'; // Added for Google Analytics

import ErrorPage from './routes/error-page.tsx';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'; // Added useLocation

// Initialize Google Analytics
const GA_MEASUREMENT_ID = 'G-5H38H1LX1F'; // Your Measurement ID
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  console.log('Google Analytics Initialized with ID:', GA_MEASUREMENT_ID);
} else {
  console.warn('Google Analytics Measurement ID is not set. Tracking will be disabled.');
}

// Component to track page views
const PageViewTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search, title: document.title });
      // Optional: Log to console for debugging during development
      // console.log(`GA Pageview Sent: ${location.pathname + location.search}, Title: ${document.title}`);
    }
  }, [location]); // Re-run when location changes

  return null; // This component does not render anything
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageViewTracker /> {/* Added PageViewTracker here */}
      <div className="grid grid-cols-12 gap-0 justify-stretch align-stretch min-h-screen grid-rows-[48px_auto_73px] md:grid-rows-[72px_auto_73px]">
          <div className="col-span-12">
              <HeaderComponent />
            </div>
          <div className="hidden md:block md:col-span-1">&nbsp;</div>
          <div className="col-span-12 md:col-span-10 p-2 lg:p-4">
            <Routes>
                <Route path="/"           element={<About />}       errorElement={<ErrorPage />} />
                <Route path="/projects"   element={<Projects />}    errorElement={<ErrorPage />}/>
                <Route path="/education"  element={<EducationAndSkills />}   errorElement={<ErrorPage />}/>
                <Route path="/experience" element={<Experience />}  errorElement={<ErrorPage />}/>
                <Route path="/contact"    element={<Contact/>}      errorElement={<ErrorPage />}/>
              </Routes>
            
          </div>
          <div className="hidden md:block md:col-span-1"></div>
          <div className="col-span-12">
            <FooterComponent />
          </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);