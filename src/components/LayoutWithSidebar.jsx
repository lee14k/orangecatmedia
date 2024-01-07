import React from 'react';
import CoolListEffect from './CoolListEffect'; // Import your CoolListEffect component

const LayoutWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '25%', padding: '20px' }}>
        {/* This is the sidebar column with your text/boxes */}
        <div style={{ marginBottom: '20px', background: '#f0f0f0', padding: '15px' }}>Box 1</div>
        <div style={{ marginBottom: '20px', background: '#f0f0f0', padding: '15px' }}>Box 2</div>
        <div style={{ marginBottom: '20px', background: '#f0f0f0', padding: '15px' }}>Box 3</div>
        {/* Add more content here as needed */}
      </div>
      <div style={{ flex: 1 }}>
        {/* This is where your CoolListEffect component is rendered */}
        <CoolListEffect />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
