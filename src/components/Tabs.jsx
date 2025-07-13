import React, { useState } from "react";

// Dummy form components for each tab
const OneWayForm = () => (
  <form className="flex flex-col gap-1">
    <div className="bg-gray-100 rounded p-2 flex items-start gap-3">
      <span className="mt-1 text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><circle cx="10" cy="8" r="2" fill="#888"/><rect x="9" y="11" width="2" height="5" rx="1" fill="#888"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">From</div>
        <input className="bg-transparent outline-none w-full text-gray-600 focus:border-b-blue-500" placeholder="Address, airport, hotel, ..." />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><path d="M6 10h8" stroke="#888" strokeWidth="2" strokeLinecap="round"/><path d="M10 6v8" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">To</div>
        <input className="bg-transparent outline-none w-full text-gray-600" placeholder="Destination" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><rect x="3" y="5" width="14" height="12" rx="2" stroke="#888" strokeWidth="2"/><path d="M7 3v4M13 3v4" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Date</div>
        <input type="date" className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><path d="M10 5v5l3 3" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Time</div>
        <input type="time" className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <button type="submit" className="w-full py-3 rounded bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold text-lg mt-2">
      Search
    </button>
  </form>
);

const ByHourForm = () => (
  <form className="flex flex-col gap-1">
    <div className="bg-gray-100 rounded p-2 flex items-start gap-3">
      <span className="mt-1 text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><circle cx="10" cy="8" r="2" fill="#888"/><rect x="9" y="11" width="2" height="5" rx="1" fill="#888"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold  text-black text-left">From</div>
        <input className="bg-transparent outline-none w-full text-gray-600" placeholder="Address, airport, hotel, ..." />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><path d="M6 10h8" stroke="#888" strokeWidth="2" strokeLinecap="round"/><path d="M10 6v8" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black text-left">Duration</div>
        <select className="bg-transparent outline-none w-full text-gray-600">
          <option>2 hours</option>
          <option>4 hours</option>
          <option>8 hours</option>
        </select>
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><rect x="3" y="5" width="14" height="12" rx="2" stroke="#888" strokeWidth="2"/><path d="M7 3v4M13 3v4" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Date</div>
        <input type="date" className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#888" strokeWidth="2"/><path d="M10 5v5l3 3" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>
      <div className="w-full">
        <div className="font-semibold  text-black text-left">Time</div>
        <input type="time" className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <button type="submit" className="w-full py-3 rounded bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold text-lg mt-2">
      Search
    </button>
  </form>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["One way", "By the hour"];
  const forms = [<OneWayForm key="oneway" />, <ByHourForm key="byhour" />];

  return (
    <div className="w-full max-w-md mx-auto my-auto bg-white rounded-lg shadow border">
      {/* Tab Headers */}
      <div className="flex w-full border-b border-gray-200">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-2 rounded-lg text-lg font-semibold text-center border-b-2 transition-colors duration-200 ${
              activeTab === idx
                ? "border-gray-300 bg-gray-100 text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-4">{forms[activeTab]}</div>
    </div>
  );
};

export default Tabs;