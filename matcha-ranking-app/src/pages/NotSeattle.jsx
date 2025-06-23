import "../App.css";
import matcha from "../assets/matcha-avni.png";

export default function NotSeattle() {
  return (
    <div className="page">
       <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      <p className="brand-heading-1">Bay Area</p>
      <p className="cafe-list">La La Land Cafe - Los Angeles, CA</p>
      <p className="cafe-list">Cafe Maiko - San Jose, CA</p>

      <p className="note">
      <strong>Note:</strong> Still very much under construction. Most other matcha spots I’ve tried have been disappointingly bad — and just a heads up: <strong>do NOT</strong> go to Matchaful.
      </p>
    </div>
  );
}
