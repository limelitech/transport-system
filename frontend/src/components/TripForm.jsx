// TripForm.jsx - Reusable form for Ballast, Murram, Feeds import React, { useState } from 'react';

const TripForm = ({ materialType, onSubmit }) => { const [formData, setFormData] = useState({ date: '', truckNo: '', deliveryNo: '', tonnage: '', locationFrom: '', locationTo: '', fuelStation: '', fuelLiters: '', fuelAmount: '', cess: '', });

const handleChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })); };

const handleSubmit = (e) => { e.preventDefault(); const submission = { ...formData, materialType }; console.log(Submitting ${materialType} Trip:, submission); if (onSubmit) onSubmit(submission); };

return ( <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"> <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 border rounded" placeholder="Date" /> <input type="text" name="truckNo" value={formData.truckNo} onChange={handleChange} className="p-2 border rounded" placeholder="Truck Number" /> <input type="text" name="deliveryNo" value={formData.deliveryNo} onChange={handleChange} className="p-2 border rounded" placeholder="Delivery Number" /> <input type="number" name="tonnage" value={formData.tonnage} onChange={handleChange} className="p-2 border rounded" placeholder="Tonnage" /> <input type="text" name="locationFrom" value={formData.locationFrom} onChange={handleChange} className="p-2 border rounded" placeholder="From" /> <input type="text" name="locationTo" value={formData.locationTo} onChange={handleChange} className="p-2 border rounded" placeholder="To" /> <input type="text" name="fuelStation" value={formData.fuelStation} onChange={handleChange} className="p-2 border rounded" placeholder="Fuel Station" /> <input type="number" name="fuelLiters" value={formData.fuelLiters} onChange={handleChange} className="p-2 border rounded" placeholder="Liters" /> <input type="number" name="fuelAmount" value={formData.fuelAmount} onChange={handleChange} className="p-2 border rounded" placeholder="Fuel Amount" /> <input type="number" name="cess" value={formData.cess} onChange={handleChange} className="p-2 border rounded" placeholder="CESS" /> <button type="submit" className="col-span-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit {materialType} Trip</button> </form> ); };

export default TripForm;

