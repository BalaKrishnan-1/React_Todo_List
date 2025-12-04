import { useEffect,useState} from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Navbar(){
  const [theme, setTheme]= useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme||'light';

  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(()=>{
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}, [theme]);
 const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
  const open = () => {
    setIsMenuOpen(true);
  };
  const close = () => {
    setIsMenuOpen(false);
  };
    return (
<>
   <nav className="nav d-flex w-100">
      <div className="nav-brand ms-4">
         <Link to="./Front-Page">Todo</Link>
        </div>
      <ul className={`link d-flex align-items-center mx-auto ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && <i className="close-btn bi bi-x-lg" onClick={close}></i>}
        <Link to="./Main" onClick={close}>Dashboard</Link>
        <Link to="./Analyzer" onClick={close}>Analyzer</Link>
      </ul>
       {/*Light Mode Icon*/}
       <div className="Theme-toggle ms-auto ms-sm-auto">
        {theme==='light' &&(
         <i className="bi bi-sun-fill" id="sun" onClick={toggleTheme}
        style={{fontSize: '24px',marginTop:'5px',borderRadius:'100%',padding:'10px 20px'}}
        ></i>)}

        {/*Dark Mode Icon*/}
        {theme==='dark' &&(
        <i className="bi bi-moon-stars-fill" id="moon" onClick={toggleTheme}
        style={{fontSize: '24px',marginTop:'5px',color:'#fff',borderRadius:'100%',padding:'10px 20px'}}
        ></i>
        )}</div>
      <i className="hamburger bi bi-list" onClick={open}></i>
      </nav>
</>
    );
}
export default Navbar;