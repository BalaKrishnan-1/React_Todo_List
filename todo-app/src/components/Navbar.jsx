import { useEffect,useState} from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Navbar(){
  const [theme, setTheme]= useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme||'light';
   
  });
useEffect(()=>{
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}, [theme]);

 const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };
    return (
<>
   <nav className="nav d-flex w-100">
      <div className="nav-brand ms-4">
         <Link to="./Front-Page">Todo</Link>
        </div>
      <ul className='link d-flex align-items-center mx-auto'>
        <Link to="./Main">Dashboard</Link>
        <Link to="./Analyzer">Analyzer</Link>
        {/*Light Mode Icon*/}
        {theme==='light' &&(
         <i className="bi bi-sun-fill" id="sun" onClick={toggleTheme}
        style={{fontSize: '24px',marginTop:'5px',borderRadius:'100%',padding:'10px 20px'}}
        ></i>)}

        {/*Dark Mode Icon*/}
        {theme==='dark' &&(
        <i className="bi bi-moon-stars-fill" id="moon" onClick={toggleTheme}
        style={{fontSize: '24px',marginTop:'5px',color:'#fff',borderRadius:'100%',padding:'10px 20px'}}
        ></i>
        )}
      </ul>
      </nav>

</>
    );
}
export default Navbar;