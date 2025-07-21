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
      <p className="brand-heading-2">California</p>
      <p className="cafe-list">
        <p> Cafe Maiko - San Jose, CA ★★★★★ </p>
        <p> Academic Coffee (Banana Cream Matcha) - Santa Clara, CA ★★★★★ </p>
        <p> Gathers Tea Bar - Chicago, IL ★★★★★ </p>
        <p> Molly Tea - Sunnyvale, CA ★★★☆☆ </p>
        <p> Kiss of Matcha - San Francisco, CA ★★★★☆ </p>
        <p> Dr.ink - San Jose, CA ★★★☆☆  </p>
        <p> La La Land Cafe - Los Angeles, CA ★★★☆☆ </p>
        <p> LinkedIn Office (Mango Matcha) - San Francisco, CA ★★★☆☆ </p>
        <p> Hero Coffee & Bar - Chicago, IL ★☆☆☆☆ </p>
        </p>

      <p className="brand-heading-2">Beyond</p>
      <p className="cafe-list">Joe & The Juice - Washington D.C. ★☆☆☆☆ </p>

      <p className="note"> 
      <strong>note:</strong> still very much under construction. (as a side note, DON'T go to matchaful)
      </p>
    </div>
  );
}
