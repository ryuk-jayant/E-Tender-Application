import React, { useState } from 'react'
import active_tenders from '../active_tenders.json'
import { useParams } from 'react-router-dom';

export default function BidForm() {
    const { id } = useParams();

  const [bidStatus, setBidStatus] = useState(false);
  const [amount, setBidAmount] = useState(0);
  const [description, setBidDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [bidError, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bidder = event.target.bidder.value;
    const token = event.target.token.value;

    try {
      setLoading(true);
      const response = await fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/AddBid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Tid: id,
          bidder,
          amount,
          token,
        }),
      });
  
      if (response.ok) {
        setLoading(false);
        const responseData = await response.json();
        if (responseData.success) {
          setBidStatus(true); // Bid successfully added
          // Redirect to another page after a delay
        } else {
          setBidStatus(false); // Bid addition failed
          setError(`Error submitting bid: ${responseData.error}`);
        }
      } else {
        setLoading(false);
        const errorMessage = await response.text();
        setBidStatus(false);
        setError(`Error submitting bid: ${errorMessage}`);
      }
    } catch (error) {
      setLoading(false);
      setBidStatus(false);
      setError('Error submitting bid: ' + error.message);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Bid Form</h2>
      <form onSubmit={handleSubmit}>
      <label className="block mb-2">
          Bidder: 
          <input
            type="text"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='bidder'
          />
        </label>
      <label className="block mb-2">
          Token: 
          <input
            type="text"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='token'
          />
        </label>
        <label className="block mb-2">
          Bid Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setBidAmount(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='amount'
          />
        </label>
        <label className="block mb-2">
          Bid Description:
          <textarea
            value={description}
            onChange={(event) => setBidDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='description'
          />
        </label>
        <button
          type="submit"
          disabled={loading} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Submitting...':'Submit Bid'}
        </button>
      </form>
      {bidStatus? <p className="text-green-600 font-bold py-5">Bid Submitted Successfully</p> : <p className="text-red-600 font-bold py-5">{bidError}</p>}
    </div>
  );
};