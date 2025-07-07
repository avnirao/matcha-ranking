import "../App.css";
import { Link } from 'react-router-dom';
import matcha from "../assets/matcha-avni.png";

export default function Home() {
  return (
    <div className="page">
      <Link to="/">
        <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      </Link>
      <p className="brand-heading-1">Hi, I’m <em>Avni</em></p>
      <p className="brand-heading-2">
      and I <span className="underline-animated">love</span> matcha.</p>
      <p className="description">
        i've tried a ton of cafés in my search for the best matcha, and i always get asked for recs.
        my rankings lived in my notes app for a while, but i figured it was time to make
        something better — so i made this for fun one afternoon!
      </p>
      <div className="links">
      <Link to="/washington">washington</Link>
      <Link to="/california">california (& beyond)</Link>
      </div>
    </div>
  );
}
