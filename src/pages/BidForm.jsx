import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BidForm() {
  const { id } = useParams();

  const [bidStatus, setBidStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bidError, setError] = useState('');
  const [fileError, setFileError] = useState('');

  
  const [bidderName, setBidderName] = useState('');
  const [bidId, setBidId] = useState('');
  const [consignerName, setConsignerName] = useState('');
  const [panDetails, setPanDetails] = useState('');
  const [communicationDetails, setCommunicationDetails] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [gstIn, setGstIn] = useState('');
  const [bidDocument, setBidDocument] = useState('');
  const [technicalSpecifications, setTechnicalSpecifications] = useState('');
  const [msme, setMsme] = useState('');
  const [min, setMin] = useState('');
  const [cin, setCin] = useState('');
  const [emdTransactionNo, setEmdTransactionNo] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = event.target.token.value;
    const acceptTerms = event.target.acceptTerms.checked;

    if (!acceptTerms) {
      alert('Please accept the terms and conditions before submitting the bid.');
      return;
    }

    /*
    FILE TYPE AND SIZE CHECK

    const maxFileSize = 5242880; // 5MB

    if (bidDocument.size > maxFileSize || technicalSpecifications.size > maxFileSize) {
      alert('File size is too large. Maximum file size is 5MB');
      return;
    }

    if (!['application/pdf', 'application/msword', 'text/plain'].includes(bidDocument.type)) {
      alert('Only PDF, Word Doc, and Text files are allowed');
      return;
    }

    if (!['application/pdf', 'application/msword', 'text/plain'].includes(technicalSpecifications.type)) {
      alert('Only PDF, Word Doc, and Text files are allowed');
      return;
    }
    */

    try {
      setLoading(true);
      const response = await fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/AddBid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          Tid: id,
          bidderName,
          bidId,
          consignerName,
          panDetails,
          communicationDetails,
          acceptTerms,
          gstIn,
          bidDocument,
          technicalSpecifications,
          msme,
          min,
          cin,
          emdTransactionNo,
          amount,
          description,
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
      console.log(error);
      setError('Error submitting bid: ' + error);
    }
  
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
            name='token'
          />
        </label>
        <label className="block mb-2">
          Bidder Name:
          <input
            type="text"
            value={bidderName}
            onChange={(event) => setBidderName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='bidderName'
          />
        </label>
        <label className="block mb-2">
          BID ID:
          <input
            type="text"
            value={bidId}
            onChange={(event) => setBidId(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='bidId'
          />
        </label>
        <label className="block mb-2">
          Consigner Name:
          <input
            type="text"
            value={consignerName}
            onChange={(event) => setConsignerName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='consignerName'
          />
        </label>
        <label className="block mb-2">
          PAN Details:
          <input
            type="text"
            value={panDetails}
            onChange={(event) => setPanDetails(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='panDetails'
          />
        </label>
        <label className="block mb-2">
          Communication Details:
          <textarea
            value={communicationDetails}
            onChange={(event) => setCommunicationDetails(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='communicationDetails'
          />
        </label>
        <label className="block mb-2">
          GST-IN:
          <input
            type="text"
            value={gstIn}
            onChange={(event) => setGstIn(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='gstIn'
          />
        </label>
        <label className="block mb-2">
          Bid Document:
          <input
            type="file"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='bidDocument'
          />
        </label>
        <label className="block mb-2">
          Technical Specifications Bid-Document:
          <input
            type="file"
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='technicalSpecifications'
          />
        </label>
        <span className="text-red-600 ">Maximum file size: 5MB</span>
        <label className="block mb-2 mt-2">
          MSME:
          <input
            type="text"
            value={msme}
            onChange={(event) => setMsme(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='msme'
          />
        </label>
        <label className="block mb-2">
          MIN:
          <input
            type="text"
            value={min}
            onChange={(event) => setMin(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='min'
          />
        </label>
        <label className="block mb-2">
          CIN:
          <input
            type="text"
            value={cin}
            onChange={(event) => setCin(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='cin'
          />
        </label>
        <label className="block mb-2">
          EMD Transaction No.:
          <input
            type="text"
            value={emdTransactionNo}
            onChange={(event) => setEmdTransactionNo(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='emdTransactionNo'
          />
        </label>
        <label className="block mb-2">
          Bid Amount:
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='amount'
          />
        </label>
        <label className="block mb-2">
          Bid Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            name='description'
          />
        </label>
        <label className="block mb-2">
          <span className='text-red-500'>Accept Terms & Conditions:</span>
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(event) => setAcceptTerms(event.target.checked)}
            className="mx-3 flex-inline align-bottom w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name='acceptTerms'
          />
        </label>
        <button
          type="submit"
          disabled={loading} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Submitting...':'Bid Now'}
        </button>
      </form>
      {bidStatus? <p className="text-green-600 font-bold py-5">Bid Submitted Successfully</p> : <p className="text-red-600 font-bold py-5">{bidError}</p>}
    </div>
  );
};