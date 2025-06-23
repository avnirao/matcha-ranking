import "../App.css";
import matcha from "../assets/matcha-avni.png";

export default function california() {
  return (
    <div className="page">
       <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      <p className="brand-heading-1">California (& beyond)</p>
      <p className="brand-heading-2">California</p>
      <p className="cafe-list">
        <p>Cafe Maiko - San Jose, CA ★★★★★</p>
        <p> La La Land Cafe - Los Angeles, CA ★★★★☆</p>
        </p>

      <p className="brand-heading-2">Beyond</p>
      <p className="cafe-list">Joe & The Juice - Washington D.C. ★☆☆☆☆ </p>

      <p className="note"> 
      <strong>note:</strong> still very much under construction. (as a side note, DON'T go to matchaful)
      </p>
    </div>
  );
}
