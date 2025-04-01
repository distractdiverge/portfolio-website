import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App.tsx';
import Contact from './routes/Contact.tsx';
import Education from './routes/Education.tsx';
import Experience from './routes/Experience.tsx';
import Projects from './routes/Projects.tsx';
import Skills from './routes/Skills.tsx';

import ErrorPage from './routes/error-page.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/experience',
    element: <Experience />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/skills',
    element: <Skills />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);