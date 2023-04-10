import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/homePage/homePage';
import NotFound from './routes/notFound/notFound';
import AboutUs from './routes/aboutUs/aboutUs';
import SearchACat from './routes/searchACat/searchACat';
import ContactUs from './routes/contactUs/contactUs';
import FindUsOnMap from './routes/findUsOnMap/findUsOnMap';


function App() {
  return (
    <div className='all_container gx-0 overflow-hidden position-relative'>
      <div className='background_image'></div>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<HomePage />} />
          <Route exact={true} path="/aboutUs" element={<AboutUs />} />
          <Route exact={true} path="/searchACat" element={<SearchACat />} />
          <Route exact={true} path="/contactUs" element={<ContactUs />} />
          <Route exact={true} path="/findUsOnMap" element={<FindUsOnMap />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
