import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === 'tab1' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'tab2' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
      </div>

      {activeTab === 'tab1' && <div>Content for Tab 1</div>}
      {activeTab === 'tab2' && <div>Content for Tab 2</div>}
    </div>
  );
};

export default Tabs;
