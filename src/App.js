import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';

import './App.scss';

const MainPage = lazy(() => import('./components/pages/MainPage'));
const OurCoffee = lazy(() => import('./components/pages/OurCoffee'));
const SingleCoffee = lazy(() => import('./components/pages/SingleCoffee'));
const SingleBest = lazy(() => import('./components/pages/SingleBest'));
const Pleasure = lazy(() => import('./components/pages/Pleasure'));
const Page404 = lazy(() => import('./components/pages/Page404'));

function App() {
  return (
    <Router>
        <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Header/>
              <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/ourcoffee" element={<OurCoffee/>} />
                <Route path="/pleasure" element={<Pleasure/>} />
                <Route path="/ourcoffee/:userid" element={<SingleCoffee/>} />
                <Route path="/:userid" element={<SingleBest/>} />
                <Route path="*" element={<Page404/>} />
              </Routes>
          <Footer/>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
