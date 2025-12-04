import { useEffect,useState,useCallback } from "react";
import '../App.css';
import { BrowserRouter,Link,Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar.jsx';

function FrontPage() {
return(
<>
<div className="front-page">
<p className="Display-1 text-center">You don't have&nbsp;to&nbsp;see the whole staircase&nbsp;just take the first step.
</p>
<div className="start-btn text-center mt-5">
  <Link to="/Main" className="btn btn-outline-info animation-pulse btn-lg">Get Started</Link>   
</div>
</div>
</>
);
}
export default FrontPage;