import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    // Initial loading screen (from mockup 1)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Loading Screen */}
      <div id="loading-screen" className={isLoading ? '' : 'hidden-loading'}>
        <img
          src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782990182/Untitled_-_02_July_2026_at_16.32.05_zlk7zu.png"
          alt="Loading..."
          className="h-62 w-auto object-contain crest-fade"
        />
      </div>

      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
