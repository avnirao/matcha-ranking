import "../App.css";
import matcha from "matcha-ranking-app/src/assets/matcha-avni.png"

export default function Seattle() {
  return (
    <div className="page">
      {/* Matcha Icon in the Top Left */}
      <img src={matcha} alt="Matcha Icon" className="matcha-icon-top-left" />

      <p className="brand-heading-1">Seattle</p>

      <div className="cafe-section">
        <div className="cafe-list">
          <p>Nana’s Green Tea</p>
          <p>Leon’s Coffee House - Iced Matcha Latte</p>
          <p>Made in House - Vanilla Matcha!</p>
          <p>Café Ladro - Game, Set, Matcha</p>
          <p>Bonito - Strawberry Matcha Latte</p>
        </div>

        <div className="cafe-list-2">
          <p>Ugly Mug - Strawberry Matcha Latte</p>
          <p>Franie - Iced Matcha Latte</p>
          <p>Mr. West - Iced Vanilla Matcha Latte</p>
          <p>George - Hot Matcha Latte</p>
          <p>Aroom - Gloomy Matcha</p>
          <p>Atulea - Strawberry Matcha, Butterfly Matcha, Chocolate Matcha</p>
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
        <p>Salesforce Social Lounge</p>
        <p>Petit Pierre Bakery</p>
        <p>Olympia Coffee Roasting Co.</p>
        <p>Dunkin’</p>
        <p>Microsoft Café</p>
        <p>Two Kick Coffee</p>
        <p>Joe & The Juice</p>
        <p>Good Earth Coffeehouse</p>
      </div>

      <p className="note">
        <strong>Note:</strong> This list has been curated with meticulous care and a discerning palate.
        While I stand by each selection, taste is subjective. Proceed thoughtfully!
      </p>
    </div>
  );
}
