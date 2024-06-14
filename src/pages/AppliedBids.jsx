import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import applied_bids from '../applied_bids.json';

export default function AppliedBids() {
    const { id } = useParams();
    return (
        <div className="rounded px-4 py-4 mb-4 flex flex-col gap-2">
        {applied_bids.map((bid) => ( bid.tenderId == id ? 
          <div key={bid.id} className="border p-4 rounded shadow-md bg-white max-w-xl">
            <h3 className="text-lg font-semibold mb-2">{bid.bidderName}</h3>
            <p className="text-gray-700 mb-2">{bid.bidderCompany}</p>
            <p className="text-gray-500"><span>Amount : </span>{bid.bidAmount}</p>
          </div> : null
        ))}
      </div>
    );
}