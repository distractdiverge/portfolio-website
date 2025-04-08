import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App.tsx';
import Contact from './routes/Contact.tsx';
import Education from './routes/Education.tsx';
import Experience from './routes/Experience.tsx';
import Projects from './routes/Projects.tsx';
import Skills from './routes/Skills.tsx';
import HeaderComponent from './components/header.tsx';
import FooterComponent from './components/footer.tsx';

import ErrorPage from './routes/error-page.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="grid grid-cols-10 gap-0 lg:gap-1 justify-stretch align-stretch min-h-screen grid-rows-[48px_auto_72px] md:grid-rows-[72px_auto_72px]">
          <div className="col-span-10">
              <HeaderComponent />
            </div>
          <div className="hidden lg:block lg:col-span-1 bg-gray-700">&nbsp;</div>
          <div className="col-span-10 lg:col-span-8 h-auto bg-white p-4">
            <Routes>
                <Route path="/"           element={<App/>}          errorElement={<ErrorPage />} />
                <Route path="/projects"   element={<Projects />}    errorElement={<ErrorPage />}/>
                <Route path="/skills"     element={<Skills />}      errorElement={<ErrorPage />}/>
                <Route path="/education"  element={<Education />}   errorElement={<ErrorPage />}/>
                <Route path="/experience" element={<Experience />}  errorElement={<ErrorPage />}/>
                <Route path="/contact"    element={<Contact/>}      errorElement={<ErrorPage />}/>
              </Routes>
            
          </div>
          <div className="hidden lg:block lg:col-span-1 bg-gray-700"></div>
          <div className="col-span-10">
            <FooterComponent />
          </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);