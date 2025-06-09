import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        
        <NavLink to='/' className='w-14 h-12 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
            <p className="blue-gradient_text">M. UA</p>
        </NavLink>

        <nav className="flex gap-7 font-medium text-lg">
            <NavLink to="/about" className = {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                About
            </NavLink>

            <NavLink to="/projects" className = {({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                Projects
            </NavLink>
        </nav>
    </header>
  )
}
 
export default Navbar