import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Footer, Navbar } from "./components";
import { Home, About, Projects, Contact } from "./pages"


const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>

        <Navbar />
          {/* <Routes> component is the main parent element of the individual <Route> self-closing elements */}
          <Routes>
            <Route path = '/' element = {<Home />} />
            
            <Route path = '/about' element = {<About />} />
            <Route path = '/projects' element = {<Projects />} />
            <Route path = '/contact' element = {<Contact />} />
          </Routes>

      </Router>
    </main>
  );
};

export default App;
