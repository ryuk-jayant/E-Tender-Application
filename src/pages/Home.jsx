import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../backend';

export default function Home() {
  const [tenders, setTenders] = useState([]);

  useEffect( () => {
    fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/TenderList')
    // fetch('https://0f0cb2f2-fad9-486c-804f-52211389d5d1-00-3hhwi6jtnz8iu.kirk.replit.dev/api/tenders')
    // fetch(`${BASE_URL}/api/tenders`)
      .then(response => response.json())
      .then(data => setTenders(data));
  }, []);

  // console.log(tenders);
    const renderTenderCards = () => {
        return tenders.map(tender => (
          <div key={tender._id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
            <h5 className="text-lg font-bold">{tender.title}</h5>
            <p className="text-gray-600">{tender.description}</p>
            <p className="text-gray-900">Deadline: {tender.deadline}</p>
            <Link to={`/tender/${tender._id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">View More</Link>
          </div>
        ));
      };

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col">
      {renderTenderCards()}
    </div>
  )
};