import './App.css';
import { lazy, Suspense, useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion'
import { StateContext } from './context/StateContext'

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Loader = lazy(() => import("./components/Loader"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setloading(true)
    }, 3000);
  }, [])

  return (
    <div >
      <StateContext>
        <AnimatePresence>
          {loading ? null : <Loader />}
        </AnimatePresence>
       <Suspense fallback={null} >
            <ScrollToTop />
            <Header />
            <Home />
            <Footer />
        </Suspense>
      </StateContext>
    </div>
  );
}

export default App;
