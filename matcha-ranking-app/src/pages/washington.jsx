import "../App.css";
import matcha from "../assets/matcha-avni.png";
import { Link } from "react-router-dom";


export default function washington() {
  return (
    <div className="page">
      {/* Matcha Icon in the Top Left */}
      <Link to="/">
        <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      </Link>

      <p className="brand-heading-1">Washington</p>

      <div className="cafe-section">
        <div className="cafe-list">
          <p>Nana’s Green Tea</p>
          <p>Vale Matcha & Coffee - Strawberry Matcha, Butter Pecan Matcha</p>
          <p>Made in House - Vanilla Matcha</p>
          <p>Bonito - Strawberry Matcha Latte</p>
          <p>Phê - Matcha Latte w/ Sweet Cream</p>
          <p>Café Ladro - Game, Set, Matcha</p>
        </div>

        <div className="cafe-list-2">
          <p>Miero Coffee Bar - Strawberry Matcha </p>
          <p>Aroom - Gloomy Matcha</p>
          <p>Leon’s Coffee House - Iced Matcha Latte</p>
          <p>Farine - Iced Matcha Latte</p>
          <p>Mr. West - Iced Vanilla Matcha Latte</p>
          <p>George - Hot Matcha Latte</p>
          <p>Sip House - Strawberry Matcha</p>
          <p>Atulea - Strawberry Matcha, Butterfly Matcha, Chocolate Matcha (in that order) </p>
          <p>Snooze Cafe </p>
          <p>Moore - Hot Matcha Latte</p>
        </div>
      </div>

      <div className="cafe-list">
        <p>Matcha Magic</p>
        <p>Café Flora</p>
        <p>Anchorhead Coffee</p>
        <p>Farine Bakery & Café</p>
        <p>Fresh Flours Bakery</p>
        <p>Mercurys Coffee Co.</p>
        <p>Ugly Mug - Strawberry Matcha Latte</p>
        <p>Petit Pierre Bakery</p>
        <p>Olympia Coffee Roasting Co.</p>
        <p>Dunkin’</p>
        <p>Microsoft Café</p>
        <p>Two Kick Coffee</p>
        <p>Good Earth Coffeehouse</p>
      </div>

      <p className="note">
        <strong>note:</strong> while i usually rank places after i've been there at least twice, some of these are one-time reviews. 
        so, there might be variation! proceed thoughtfully!!
      </p>
    </div>
  );
}
