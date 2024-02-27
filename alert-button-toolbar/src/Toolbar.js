import React from 'react';
import AlertButton from './AlertButton';
import './Toolbar.css'; 


function Toolbar() {
  return (
    <div className="toolbar">
      <AlertButton message="Alert Message 1 > Intensified Threats at 1.5°C: Limiting warming to 1.5°C still puts 950 million people at risk of water stress and desertification, with a 24% increase in flood exposure globally ">Fact # 1</AlertButton>
      <AlertButton message="Alert Message 2 > Severe Impacts Beyond 1.5°C: Surpassing 1.5°C of warming could lead to irreversible damages, including species extinctions and increased human mortality from heat stress">Fact # 2</AlertButton>
      <AlertButton message="Alert Message 3 > Adaptation Finance Gap: Developing countries need up to $295 billion per year by 2050 for adaptation, but current funding is far below this, hindering resilience building">Fact # 3</AlertButton>
      <AlertButton message="Alert Message 4 > Limits to Adaptation: Some climate impacts are already beyond adaptation, causing irreversible losses and damages, especially in highly vulnerable communities and ecosystems">Fact # 4</AlertButton>
      <AlertButton message="Alert Message 5 > Emissions Reduction Urgency: Global GHG emissions must peak before 2025 to stay within the 1.5°C pathway, requiring rapid and significant reductions">Fact # 5</AlertButton>
      <AlertButton message="Alert Message 6 > Fossil Fuel Phase-Out Needed: To limit warming to 1.5°C, the world must drastically reduce fossil fuel use, including a 95% reduction in coal use by 2050​">Fact # 6</AlertButton>
      <AlertButton message="Alert Message 7 > Funding for Loss and Damage: Historic progress was made at COP27 with the agreement to establish a dedicated fund for loss and damage, marking a significant step forward in climate negotiations​">Fact # 7</AlertButton>
    </div>
  );
}

export default Toolbar;
