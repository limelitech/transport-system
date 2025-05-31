// TripTable.jsx - Displays submitted trips filtered by material type import React from 'react';

const TripTable = ({ trips, materialType }) => { const filteredTrips = trips.filter(trip => trip.materialType === materialType);

return ( <div className="overflow-x-auto"> <table className="min-w-full border border-gray-300 text-sm"> <thead className="bg-gray-100"> <tr> <th className="border p-2">Date</th> <th className="border p-2">Truck No</th> <th className="border p-2">Delivery No</th> <th className="border p-2">Tonnage</th> <th className="border p-2">From</th> <th className="border p-2">To</th> <th className="border p-2">Fuel Station</th> <th className="border p-2">Liters</th> <th className="border p-2">Amount</th> <th className="border p-2">CESS</th> </tr> </thead> <tbody> {filteredTrips.map((trip, index) => ( <tr key={index} className="odd:bg-white even:bg-gray-50"> <td className="border p-2">{trip.date}</td> <td className="border p-2">{trip.truckNo}</td> <td className="border p-2">{trip.deliveryNo}</td> <td className="border p-2">{trip.tonnage}</td> <td className="border p-2">{trip.locationFrom}</td> <td className="border p-2">{trip.locationTo}</td> <td className="border p-2">{trip.fuelStation}</td> <td className="border p-2">{trip.fuelLiters}</td> <td className="border p-2">{trip.fuelAmount}</td> <td className="border p-2">{trip.cess}</td> </tr> ))} {filteredTrips.length === 0 && ( <tr> <td colSpan="10" className="text-center p-4 text-gray-500">No {materialType} trips recorded.</td> </tr> )} </tbody> </table> </div> ); };

export default TripTable;

