import React, { useState, useEffect } from 'react';
import applied_tenders from '../applied_tenders.json';

const AppliedTenders = () => {
  return (
    <div className="max-w-md p-4 pt-6">
      <h2 className="text-3xl font-bold mb-4">Applied Tenders</h2>
      <ul className="flex flex-col">
        {applied_tenders.map((bid) => (
          <li key={bid.id} className="w-full p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold"><span className='font-medium'>Tender ID : </span>{bid.tenderId}</h3>
              <p className="text-gray-600"><span className='font-medium'>Bid Amount : </span>{bid.bidAmount}</p>
              <p className="text-gray-600"><span className='font-medium'>Bid Description : </span>{bid.bidDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedTenders;