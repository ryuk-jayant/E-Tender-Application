import React from 'react'
import { useParams } from 'react-router-dom';
import active_tenders from '../active_tenders.json';

export default function TenderDetails() {
    const { id } = useParams();
    console.log(id);
    const tender = active_tenders.find((tender) => tender.id === parseInt(id));
  
    if (!tender) {
      return <div>Tender not found</div>;
    }
  
    return (
      <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{tender.title}</h2>
      <p className="text-lg mb-4">{tender.description}</p>
      <p className="text-lg mb-4">Category: {tender.category}</p>
      <p className="text-lg mb-4">Deadline: {tender.deadline}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
    );
}