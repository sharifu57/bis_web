import './App.css'
import { routes } from './routes/routes'
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import React from 'react';

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App
