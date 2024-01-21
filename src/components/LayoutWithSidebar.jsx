import React from 'react';
import CoolListEffect from './CoolListEffect'; // Import your CoolListEffect component

const LayoutWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }} className="relative z-0 sidebarcontainer">
      <div style={{ width: '25%', padding: '20px' }}>
<h1 className="text-6xl">Our Services</h1>  
  <div style={{ marginBottom: '20px', padding: '15px' }}>Mix & match our areas of expertise to meet your exact needs</div>
        <div style={{ marginBottom: '20px',  padding: '15px' }}>Don't see it listed? Reach out to us and we'll adapt </div>
       
      </div>
      <div style={{ flex: 1 }}>
        {/* This is where your CoolListEffect component is rendered */}
        <CoolListEffect />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
