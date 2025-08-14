import { useState } from 'react'
import './App.css'
import Education from './components/Education'
import Home from './components/home'
import Project from './components/Project'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <><BrowserRouter>
  //     <ul>
  //       <li><Link to="/">Home</Link></li>
  //       <li><Link to="/about">About</Link></li>
  //       <li><Link to="/education">Education</Link></li>
  //       <li><Link to="/project">Project</Link></li>
  //       <li><Link to="/contact">Contact</Link></li>
  //     </ul>
  //      <Routes>
  //     <Route path='/' element={<Home/>}></Route>
  //     <Route path='/about' element={<About/>}/>
  //     <Route path='/education' element={<Education/>}/>
  //     <Route path='/project' element={<Project/>}/>
  //     <Route path='/contact' element={<Contact/>}/>
  //   </Routes>
  //     </BrowserRouter>
  //   </>
  // )
  return (
  <>
    <BrowserRouter>
      <nav className="bg-gray-700 p-4 shadow-lg">
        <ul className="flex justify-center space-x-8 text-white font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="hover:text-gray-300 transition duration-200"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="hover:text-gray-300 transition duration-200"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);


}

export default App
