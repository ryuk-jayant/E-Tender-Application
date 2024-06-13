import React, { useState } from 'react';

export default function CreateTender() {
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [address, setAddress] = useState('');
  const [tenderNo, setTenderNo] = useState('');
  const [tenderOpenDate, setTenderOpenDate] = useState('');
  const [tenderClosingDate, setTenderClosingDate] = useState('');
  const [tenderDescription, setTenderDescription] = useState('');
  const [bidOfferValidity, setBidOfferValidity] = useState('');
  const [clarifications, setClarifications] = useState('');
  const [typeOfBid, setTypeOfBid] = useState('');
  const [emd, setEmd] = useState(false);
  const [emdAmount, setEmdAmount] = useState('');
  const [epbgAdvisoryBank, setEpbgAdvisoryBank] = useState('');
  const [epbgId, setEpbgId] = useState('');
  const [bidSplitting, setBidSplitting] = useState('');
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');
  const [quantityRequired, setQuantityRequired] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialTechnicalSpecifications, setSpecialTechnicalSpecifications] = useState('');
  const [consigneeReportingOfficerIdName, setConsigneeReportingOfficerIdName] = useState('');
  const [miiPurchasePreference, setMiiPurchasePreference] = useState(false);
  const [msePurchasePreference, setMsePurchasePreference] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tenderError, setTenderError] = useState('');
  const [tenderStatus, setTenderStatus] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('companyLogo', companyLogo);
    formData.append('companyName', companyName);
    formData.append('address', address);
    formData.append('tenderNo', tenderNo);
    formData.append('tenderOpenDate', tenderOpenDate);
    formData.append('tenderClosingDate', tenderClosingDate);
    formData.append('tenderDescription', tenderDescription);
    formData.append('bidOfferValidity', bidOfferValidity);
    formData.append('clarifications', clarifications);
    formData.append('typeOfBid', typeOfBid);
    formData.append('emd', emd);
    formData.append('emdAmount', emdAmount);
    formData.append('epbgAdvisoryBank', epbgAdvisoryBank);
    formData.append('epbgId', epbgId);
    formData.append('bidSplitting', bidSplitting);
    formData.append('category', category);
    formData.append('item', item);
    formData.append('quantityRequired', quantityRequired);
    formData.append('deliveryDate', deliveryDate);
    formData.append('specialTechnicalSpecifications', specialTechnicalSpecifications);
    formData.append('consigneeReportingOfficerIdName', consigneeReportingOfficerIdName);
    formData.append('miiPurchasePreference', miiPurchasePreference);
    formData.append('msePurchasePreference', msePurchasePreference);
    setLoading(true);
    fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/ADMIN/NewTender', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {response.json();   console.log(response.json());
            setLoading(false);
        if (response.acknowledged === true) {
            setTenderStatus(true);
        } 
      })
      .then((data) => {console.log(data);
      })
      .catch((error) => {console.error(error); setTenderError(error)});
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Create Tender</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <label className="w-1/3">Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-2/3 p-2" />
        </div>
        {/* <div className="flex mb-4">
          <label className="w-1/3">Company Logo:</label>
          <input type="file" onChange={(e) => setCompanyLogo(e.target.files[0])} className="w-2/3 p-2" />
        </div> */}
        <div className="flex mb-4">
          <label className="w-1/3">Address and Communication Details:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Tender No:</label>
          <input type="text" value={tenderNo} onChange={(e) => setTenderNo(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Tender Open Date:</label>
          <input type="date" value={tenderOpenDate} onChange={(e) => setTenderOpenDate(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Tender Closing Date:</label>
          <input type="date" value={tenderClosingDate} onChange={(e) => setTenderClosingDate(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Tender Description:</label>
          <textarea value={tenderDescription} onChange={(e) => setTenderDescription(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Bid offer validity (in days):</label>
          <input type="number" value={bidOfferValidity} onChange={(e) => setBidOfferValidity(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Clarifications:</label>
          <textarea value={clarifications} onChange={(e) => setClarifications(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Type of Bid:</label>
          <select value={typeOfBid} onChange={(e) => setTypeOfBid(e.target.value)} className="w-2/3 p-2">
            <option value="">Select</option>
            <option value="Two-packet bidding system">Two-packet bidding system</option>
          </select>
        </div>
        <div className="flex mb-4">
        <label className="w-1/3">EMD:</label>
        <div className="w-2/3 p-2">
            <label>
            <input type="radio" value="yes" checked={emd === "yes"} onChange={(e) => setEmd(e.target.value)} />
            Yes
            </label>
            &nbsp;
            <label>
            <input type="radio" value="no" checked={emd === "no"} onChange={(e) => setEmd(e.target.value)} />
            No
            </label>
        </div>
        {emd === "yes" && (
            <div className="flex mb-4">
            <label className="w-1/3">EMD Amount:</label>
            <input type="number" value={emdAmount} onChange={(e) => setEmdAmount(e.target.value)} className="p-2 w-2/3" />
            </div>
        )}
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">EPBG Advisory Bank:</label>
          <input type="text" value={epbgAdvisoryBank} onChange={(e) => setEpbgAdvisoryBank(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">EPBG ID:</label>
          <input type="text" value={epbgId} onChange={(e) => setEpbgId(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
            <label className="w-1/3">Bid Splitting:</label>
            <div className="w-2/3 p-2">
                <label>
                <input type="radio" value="Allowed" checked={bidSplitting === "Allowed"} onChange={(e) => setBidSplitting(e.target.value)} />
                Allowed
                </label>
                &nbsp;
                <label>
                <input type="radio" value="Not-Allowed" checked={bidSplitting === "Not-Allowed"} onChange={(e) => setBidSplitting(e.target.value)} />
                Not-Allowed
                </label>
            </div>
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Item:</label>
          <input type="text" value={item} onChange={(e) => setItem(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Quantity Required:</label>
          <input type="number" value={quantityRequired} onChange={(e) => setQuantityRequired(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3">Delivery Date:</label>
          <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="w-2/3 p-2" />
        </div>
        {/* <div className="flex mb-4">
          <label className="w-1/3">Special Technical Specifications:</label>
          <input type="file" onChange={(e) => setSpecialTechnicalSpecifications(e.target.files[0])} className="w-2/3 p-2" />
        </div> */}
        <div className="flex mb-4">
          <label className="w-1/3">Consignee/Reporting Officer ID/Name:</label>
          <input type="text" value={consigneeReportingOfficerIdName} onChange={(e) => setConsigneeReportingOfficerIdName(e.target.value)} className="w-2/3 p-2" />
        </div>
        <div className="flex mb-4">
  <label className="w-1/3">MII Purchase Preference:</label>
  <div className="w-2/3 p-2">
    <label>
      <input type="radio" value="yes" checked={miiPurchasePreference === "yes"} onChange={(e) => setMiiPurchasePreference(e.target.value)} />
      Yes
    </label>
    &nbsp;
    <label>
      <input type="radio" value="no" checked={miiPurchasePreference === "no"} onChange={(e) => setMiiPurchasePreference(e.target.value)} />
      No
    </label>
  </div>
</div>

    <div className="flex mb-4">
    <label className="w-1/3">MSE Purchase Preference:</label>
    <div className="w-2/3 p-2">
        <label>
        <input type="radio" value="yes" checked={msePurchasePreference === "yes"} onChange={(e) => setMsePurchasePreference(e.target.value)} />
        Yes
        </label>
        &nbsp;
        <label>
        <input type="radio" value="no" checked={msePurchasePreference === "no"} onChange={(e) => setMsePurchasePreference(e.target.value)} />
        No
        </label>
    </div>
    </div>
        <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {loading ? 'Creating...':'Create Tender'}
        </button>
      </form>
      {tenderStatus? <p className="text-green-600 font-bold py-5">Tender Created Successfully</p> : <p className="text-red-600 font-bold py-5">{tenderError}</p>}

    </div>
  );
};
