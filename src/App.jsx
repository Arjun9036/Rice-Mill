import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ContactUs from './pages/ContactUs';
import Process from './pages/Process';
import About from './pages/About';
import Quality from './pages/Quality';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="process" element={<Process />} />
          <Route path="quality" element={<Quality />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
