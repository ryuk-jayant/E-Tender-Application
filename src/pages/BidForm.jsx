import React, { useState } from 'react'
import active_tenders from '../active_tenders.json'
import { useParams } from 'react-router-dom';

export default function BidForm() {
    const { id } = useParams();
    const tender = active_tenders.find((tender) => tender.id === parseInt(id));

  const [bidAmount, setBidAmount] = useState('');
  const [bidDescription, setBidDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // // Call API to submit bid with token
    // fetch('/api/submit-bid', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //       tenderId: id,
    //       bidAmount,
    //       bidDescription,
    //     }),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   // Redirect to AppliedTenders page with token
    //   history.push(`/findmytender/${token}`);
    // })
    // .catch((error) => console.error(error));


    console.log(`Bid submitted: ${bidAmount} - ${bidDescription}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Bid Form</h2>
      <form onSubmit={handleSubmit}>
      <label className="block mb-2">
          Token: 
          <input
            type="text"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Bid Amount:
          <input
            type="number"
            value={bidAmount}
            onChange={(event) => setBidAmount(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Bid Description:
          <textarea
            value={bidDescription}
            onChange={(event) => setBidDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Bid
        </button>
      </form>
    </div>
  )
};