// Dashboard.jsx - Tabs for Ballast, Murram, Feeds import React, { useState } from 'react'; import BallastForm from '../components/BallastForm'; import BallastTable from '../components/BallastTable'; import MurramForm from '../components/MurramForm'; import MurramTable from '../components/MurramTable'; import FeedsForm from '../components/FeedsForm'; import FeedsTable from '../components/FeedsTable';

const Dashboard = () => { const [activeTab, setActiveTab] = useState('Ballast');

const renderTabContent = () => { switch (activeTab) { case 'Ballast': return ( <> <BallastForm /> <BallastTable /> </> ); case 'Murram': return ( <> <MurramForm /> <MurramTable /> </> ); case 'Feeds': return ( <> <FeedsForm /> <FeedsTable /> </> ); default: return null; } };

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Transport Dashboard</h1> <div className="flex space-x-4 mb-6"> {['Ballast', 'Murram', 'Feeds'].map((tab) => ( <button key={tab} className={px-4 py-2 rounded-xl shadow ${ activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-800' }} onClick={() => setActiveTab(tab)} > {tab} </button> ))} </div> <div className="bg-white p-4 rounded-xl shadow"> {renderTabContent()} </div> </div> ); };

export default Dashboard;

