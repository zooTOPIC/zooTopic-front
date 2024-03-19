// function Developers() {
//     return (
//       <div className="Developers">
//       </div>
//     );
//   }
  
//   export default Developers;

import React from "react";
import Developer from "../components/Developer";
import developersData from "../data/developersData.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Developers() {
  return (
    <div>
      <Header />
      {developersData.map((developer) => (
        <Developer key={developer.id} {...developer} />
      ))}
      <Footer />
    </div>
  );
}

export default Developers;

