import React, { useState } from 'react';

const AppliedTenders = () => {
  const [token, setToken] = useState('');
  const [appliedTenders, setAppliedTenders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error

    try {
      setLoading(true);
      const tokenResponse = await fetch(`https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/FindMYTender/${token}`);
      if (!tokenResponse.ok) {
        setLoading(false);
        throw new Error('Token not found');
      }
      setLoading(false);
      const tokenData = await tokenResponse.json();
      setAppliedTenders(tokenData);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setAppliedTenders([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-4">
        <label className="block mb-2">
          Enter Token: 
          <input
            type="text"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="p-2 mt-1 mx-2 text-sm text-gray-700 rounded"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
        >
          {loading ? 'Submitting...':'Submit'}
        </button>
      </form>

      {error && <p className="text-red-500 font-semibold">{error}</p>}

      <div className="rounded px-4 py-4 mb-4 flex flex-col gap-2">
        {appliedTenders.map((tender) => (
          <div key={tender[0]._id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
          <div className="flex justify-between">          
            <h5 className="text-lg font-bold">Company Name : {tender[0].companyName}</h5>
            <img src={tender[0].companyLogo} alt={tender[0].companyName} className="w-12 h-12 rounded-full object-cover" />
          </div>
          <p className="text-gray-600">Description : {tender[0].tenderDescription}</p>
          <p className="text-gray-600">Item : {tender[0].item}</p>
          <p className="text-gray-900">Tender Open Date : {tender[0].tenderOpenDate}</p>
          <p className="text-gray-900">Tender Closing Date : {tender[0].tenderClosingDate}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTenders;
