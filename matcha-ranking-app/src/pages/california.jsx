import "../App.css";
import matcha from "../assets/matcha-avni.png";
import { Link } from "react-router-dom";


export default function california() {
  return (
    <div className="page">
       <Link to="/">
        <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      </Link>
      <p className="brand-heading-1">California (& beyond)</p>
      <p className="cafe-list">
        <p> Shoji - San Francisco, CA ★★★★★ </p>
        <p> Cafe Maiko - San Jose, CA ★★★★★ </p>
        <p> Academic Coffee (Banana Cream Matcha) - Santa Clara, CA ★★★★★ </p>
        <p> Izumi Matcha - San Jose, CA ★★★★★ </p>
        <p> Gathers Tea Bar - Chicago, IL ★★★★★ </p>
        <p> Tadaima Marina - San Francisco, CA ★★★★☆</p>
        <p> Kiss of Matcha - San Francisco, CA ★★★★☆ </p>
        <p> Molly Tea - Sunnyvale, CA ★★★☆☆ </p>
        <p> Dr.ink - San Jose, CA ★★★☆☆  </p>
        <p> Tamper Room - Fremont, CA ★★★☆☆ </p>
        <p> La La Land Cafe - Los Angeles, CA ★★★☆☆ </p>
        <p> Marawu Seicha - Palo Alto, CA ★★★☆☆ </p>
        <p> HeyTea - Sunnyvale, CA ★★★☆☆ </p>
        <p> Lakeside Coffee Bar - San Ramon, CA ★★★☆☆ </p>
        <p> LinkedIn Office (Mango Matcha) - San Francisco, CA ★★★☆☆ </p>
        <p> Hero Coffee & Bar - Chicago, IL ★☆☆☆☆ </p>
        <p> Joe & The Juice - Washington D.C. ★☆☆☆☆ </p>
        <p> Matchaful - New York City, NY ☆☆☆☆☆ </p>
        </p>


      <p className="note"> 
      <strong>note:</strong> still very much under construction.
      </p>
    </div>
  );
}
