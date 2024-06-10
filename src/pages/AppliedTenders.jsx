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
          <div key={tender[0]._id} className="border p-4 rounded shadow-md bg-white max-w-xl">
            <h3 className="text-lg font-semibold mb-2">{tender[0].title}</h3>
            <p className="text-gray-700 mb-2">{tender[0].description}</p>
            <p className="text-gray-500"><span>Category : </span>{tender[0].category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTenders;
