import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Academics from './pages/Academics/Academics';
import Research from './pages/Research/Research';
import StudentCorner from './pages/StudentCorner/StudentCorner';
import Placement from './pages/Placement/Placement';
import Achievements from './pages/StudentAchievements/StudentAchievements';
import Contact from './pages/Contact/Contact';
import StudentAchievements from './pages/StudentAchievements/StudentAchievements';
import HODDesk from './HODDesk/HODDesk';
import Faculty from './pages/People/Faculty';
import AdminStaff from './pages/People/AdminStaff';
import NonTeachingStaff from './pages/People/NonTeachingStaff';

function App() {
  return (
    <>
      <NavbarComp />
      <main className="pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/research" element={<Research />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-achievements" element={<StudentAchievements />} />
          <Route path="/hod" element={<HODDesk />} />
          <Route path="/people/faculty" element={<Faculty />} />
          <Route path="/people/admin-staff" element={<AdminStaff />} />
          <Route path="/people/non-teaching" element={<NonTeachingStaff />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
