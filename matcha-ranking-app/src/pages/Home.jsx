import "../App.css";
import { Link } from 'react-router-dom';
import matcha from "../assets/matcha-avni.png";

export default function Home() {
  return (
    <div className="page">
      <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />
      <p className="brand-heading-1">Hi, I’m <em>Avni</em></p>
      <p className="brand-heading-2">
      and I <span className="underline-animated">love</span> matcha.</p>
      <p className="description">
        I've tried a ton of cafés in my search for the best matcha, and I always get asked for recs.
        My rankings lived in my Notes app for a while, but I figured it was time to make
        something better — so I made this for fun one afternoon!
      </p>
      <div className="links">
      <Link to="/seattle">seattle</Link>
      <Link to="/not-seattle">not seattle</Link>
      </div>
    </div>
  );
}
