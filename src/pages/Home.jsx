import React, { useState } from 'react';
import active_tenders from '../active_tenders.json';
import { Link } from 'react-router-dom';

export default function Home() {
    
    const renderTenderCards = () => {
        return active_tenders.map(tender => (
          <div key={tender.id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
            <h5 className="text-lg font-bold">{tender.title}</h5>
            <p className="text-gray-600">{tender.description}</p>
            <p className="text-gray-900">Deadline: {tender.deadline}</p>
            <Link to={`/tender/${tender.id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">View More</Link>
          </div>
        ));
      };

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col">
      {renderTenderCards()}
    </div>
  )
};