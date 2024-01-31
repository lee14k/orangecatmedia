import React from 'react';
import CoolListEffect from './CoolListEffect'; // Import your CoolListEffect component

const LayoutWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }} className="relative z-0 sidebarcontainer">
      <div style={{ width: '25%', padding: '20px' }}>
<h1 className="text-6xl py-12">Our Services</h1>  

        <div className="needmore" style={{ marginBottom: '20px',  padding: '15px' }}><h4 className="text-2xl mb-10">Don't see it listed?</h4> <p>Contact us and we can figure out how to adapt to your needs.</p></div>
       
      </div>
      <div style={{ flex: 1 }}>
        {/* This is where your CoolListEffect component is rendered */}
        <CoolListEffect />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
