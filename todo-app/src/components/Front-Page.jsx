import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Timeline() {

const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Main'); // React Router navigation
    }, 4500);
    return () => clearTimeout(timer);
  }, [navigate]);
  // ... rest of code

  return (
    <div className="Timeline">
    <div className="UI lg-mt-5 md-mt-5" >
        <p className="Typo"> 
        <span className="word-now">NOW</span>
        <span className="loop">O</span>
        <span className="word-r">R NEVER</span></p>
      </div>
      </div>
  );
}

export default function FrontPage() {
  return (
    <>
      <Timeline />
    </>
  );
}
