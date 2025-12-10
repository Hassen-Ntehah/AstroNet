import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import LatestPhotos from "./pages/LatestPhotos";
import ImageDetail from './pages/ImageDetails';
import History from "./pages/History";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/latest" element={<LatestPhotos/>} />
      <Route path="/image/:date" element={<ImageDetail/>} />
      <Route path="/History" element={<History/>} />

    </Routes>
      </BrowserRouter> 
   
  </React.StrictMode>
);

reportWebVitals();
