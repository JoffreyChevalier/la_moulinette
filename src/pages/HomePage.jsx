import React from "react";

import Dva from "../components/Dva";
import GeneralCard from "../components/GeneralCard";

function HomePage() {
  return (
    <div>
      <GeneralCard>
        <Dva />
      </GeneralCard>
    </div>
  );
}

export default HomePage;
