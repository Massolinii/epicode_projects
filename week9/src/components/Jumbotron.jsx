import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
  return (
    // Il "jumbotron" è un div con background image, e text elevato con z-index (per sicurezza)
    <div
      className="jumbotron"
      style={{
        backgroundImage: `url(https://occ-0-2794-1556.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608)`
      }}
    >
      <div className="jumbotron-text">
        <h2>Watch Now the new Season of</h2>
        <h1>STRANGER THINGS</h1>
        <p>The absolutely not over-acclaimed series made by Netflix.</p>
        <p>Because screw you if you wanted to watch some good stuff.</p>
        <p>Oh and also Big Mouth as been renewed for Season 7. How lucky we are.</p>
        {/* Button Watch Now */}
        <button className="jumbotron-button">Watch Now</button>
      </div>
      
    </div>
  );
}

export default Jumbotron;