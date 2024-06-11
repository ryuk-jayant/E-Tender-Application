import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../backend';
import search from '../SearchByKeyword';
import {FaSearch} from "react-icons/fa";

export default function Home() {
  const [tenders, setTenders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://065fc8c5-9bf1-407d-a451-e7f70268dcbf-00-1ph04tsuewwgg.kirk.replit.dev/BID/TenderList')
      .then(response => response.json())
      .then(data => setTenders(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const keywordArray = searchQuery.split(" ");
    const filterColumns = ["title", "description", "category"];
    const results = search(tenders, keywordArray, filterColumns);
    setSearchResults(results);
  };

  const renderTenderCards = () => {
    if (searchResults.length > 0) {
      return searchResults.map(tender => (
        <div key={tender._id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
          <h5 className="text-lg font-bold">{tender.title}</h5>
          <p className="text-gray-600">{tender.description}</p>
          <p className="text-gray-900">Deadline: {tender.deadline}</p>
          <Link to={`/tender/${tender._id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">View More</Link>
        </div>
      ));
    } else {
      return tenders.map(tender => (
        <div key={tender._id} className="bg-white shadow-md rounded px-4 py-4 mb-4 flex flex-col gap-2">
          <h5 className="text-lg font-bold">{tender.title}</h5>
          <p className="text-gray-600">{tender.description}</p>
          <p className="text-gray-900">Deadline: {tender.deadline}</p>
          <Link to={`/tender/${tender._id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-auto">View More</Link>
        </div>
      ));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 flex flex-col ">
      <form onSubmit={handleSearch} className='bg-white mb-4 justify-center flex rounded p-3'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full"
        />
        <button type="submit" className="bg-slate-200 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded ml-auto"><FaSearch className="text-slate-600"></FaSearch></button>
      </form>
      {renderTenderCards()}
    </div>
  );
}