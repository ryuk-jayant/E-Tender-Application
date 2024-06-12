import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import active_tenders from '../active_tenders.json';
import logo from '../logo.png'; // Path to your default image


export default function TenderDetails() {
    const { id } = useParams();
    // console.log(id);
    // const tender = active_tenders.find((tender) => tender.id === parseInt(id));
    const [tender, setTender] = useState([]);

    useEffect(() => {
      fetch(`https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/Tender/${id}`)
        .then(response => response.json())
        .then(data => setTender(data[0]));
    }, []);

    if (!tender) {
      return <div>Tender not found</div>;
    }
    // console.log(tender);
  
    return (
      <div className="p-8">
        <div className="flex justify-between">          
        <h2 className="text-3xl font-bold mb-4">Company Name : {tender.companyName}</h2>
            {/* <img src={tender.companyLogo} alt={tender.companyName} className="w-24 h-24 rounded-full border object-cover" /> */}
            <img src={logo} alt={tender.companyName} className="w-24 h-24 rounded-full border object-cover" />

          </div>
      <p className="text-lg mb-4">Address : {tender.address}</p>
      <p className="text-lg mb-4">Tender No : {tender.tenderNo}</p>
      <p className="text-lg mb-4">Tender Open Date : {tender.tenderOpenDate}</p>
      <p className="text-lg mb-4">Tender Closing Date : {tender.tenderClosingDate}</p>
      <p className="text-lg mb-4">Tender Description : {tender.tenderDescription}</p>
      <p className="text-lg mb-4">Bid Offer Validity : {tender.bidOfferValidity}</p>
      <p className="text-lg mb-4">Clarifications : {tender.clarifications}</p>
      <p className="text-lg mb-4">Type of Bid : {tender.typeOfBid}</p>
      <p className="text-lg mb-4">EMD : {tender.emd}</p>
      <p className="text-lg mb-4">EMD Amount : {tender.emdAmount}</p>
      <p className="text-lg mb-4">EPBG Advisory Bank : {tender.epbgAdvisoryBank}</p>
      <p className="text-lg mb-4">EPBG ID : {tender.epbgId}</p>
      <p className="text-lg mb-4">Bid Splitting : {tender.bidSplitting}</p>
      <p className="text-lg mb-4">Item : {tender.item}</p>
      <p className="text-lg mb-4">Category: {tender.category}</p>
      <p className="text-lg mb-4">Quantity Required : {tender.quantityRequired}</p>
      <p className="text-lg mb-4">Deilvery Date : {tender.deliveryDate}</p>
      <p className="text-lg mb-4">Special Technical Specifications : {tender.specialTechnicalSpecifications}</p>
      <p className="text-lg mb-4">Consignee Reporting Officer Id/Name : {tender.consigneeReportingOfficerIdName}</p>
      <p className="text-lg mb-4">MII Purchase Preference : {tender.miiPurchasePreference}</p>
      <p className="text-lg mb-6">MSE Purchase Preference : {tender.msePurchasePreference}</p>

      <Link to={`/bidform/${tender._id}`} target='_blank' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
        Apply Now
      </Link>
    </div>
    );
}