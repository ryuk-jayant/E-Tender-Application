import React, { useEffect, useState , } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../backend';
import {FaSearch} from "react-icons/fa";



export default function AdminDashboard() {
  const [tenders, setTenders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/ADMIN/TenderList')
      .then(response => response.json())
      .then(data => setTenders(data));
  }, []);

  const handleLogout = () => {
    navigate("/admin-login");
  }

  const handleDelete = (id) => {
    setLoading(true);

    fetch(`https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/ADMIN/DeleteTender/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      if (data.acknowledged) {
        // Filter out the deleted tender from the tenders state
        const updatedTenders = tenders.filter(tender => tender._id !== id);
        // Update the state with the filtered tenders
        setTenders(updatedTenders);
        // Optionally, you can show a message or perform any other actions upon successful deletion
        console.log("Tender deleted successfully.");
      } else {
        console.error("Failed to delete tender.");
      }
    })
    .catch(error => {
      setLoading(false);
      console.error("Error deleting tender:", error);
    });
    setLoading(false);

  }
  

  const renderTenderCards = () => {
      return tenders.map(tender => (
        <div key={tender._id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
        <div className="flex justify-between">          
          <h5 className="text-lg font-bold">Company Name : {tender.companyName}</h5>
          <img src={tender.companyLogo} alt={tender.companyName} className="w-12 h-12 rounded-full object-cover" />
        </div>
        <p className="text-gray-600">Description : {tender.tenderDescription}</p>
        <p className="text-gray-600">Item : {tender.item}</p>
        <p className="text-gray-900">Tender Open Date : {tender.tenderOpenDate}</p>
        <p className="text-gray-900">Tender Closing Date : {tender.tenderClosingDate}</p>
        <Link to={`/applied-bids/${tender.id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">Bid List</Link>
        <Link to={`/tender/${tender._id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">View More</Link>
        <button onClick={() => handleDelete(tender._id)} className='bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded justify-start max-w-fit'>{loading ? "Deleting..." : "Delete Tender"}</button>
      </div>
      ));

  };

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col justify-center text-center">
      <h1 className='font-bold text-5xl grid grid-cols-1 gap-4 place-items-center mb-4'>Admin Dashboard</h1>
      <Link to='/create-tender' target="_blank">
        <button className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded font-semibold text-lg mb-4 hover:underline">Create New Tender</button>
      </Link>
      {renderTenderCards()}
      <button onClick={handleLogout} className='text-white bg-red-500'>Logout</button>
    </div>
  );
}