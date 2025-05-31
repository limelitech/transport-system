// Dashboard.jsx - Unified with TripForm and material-specific tabs import React, { useState } from 'react'; import TripForm from '../components/TripForm';

const Dashboard = () => { const [activeTab, setActiveTab] = useState('Ballast');

const handleSubmit = (data) => { console.log(Submitted ${data.materialType} trip:, data); // TODO: Send to backend API };

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Transport Dashboard</h1>

<div className="flex space-x-4 mb-6">
    {['Ballast', 'Murram', 'Feeds'].map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 rounded-xl shadow ${
          activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>

  <div className="bg-white p-4 rounded-xl shadow">
    <TripForm materialType={activeTab} onSubmit={handleSubmit} />
    {/* You can also render material-specific tables here */}
  </div>
</div>

); };

export default Dashboard;

