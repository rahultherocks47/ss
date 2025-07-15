import React, { useState } from "react";


 const _date = new Date()
 const today = _date.toISOString().split('T')[0]; // "YYYY-MM-DD"
 const hours = _date.getHours();
const minutes = String(_date.getMinutes()).padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`; // "HH:MM AM/PM"
// Dummy form components for each tab
const OneWayForm = () => (
  <form className="flex flex-col gap-1">
    <div className="bg-gray-100 rounded p-2 flex items-start gap-3">
      <span className="mt-1 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>

      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">From</div>
        <input className="bg-transparent outline-none w-full text-gray-600 focus:border-b-blue-500" placeholder="Address, airport, hotel, ..." />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>

      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">To</div>
        <input className="bg-transparent outline-none w-full text-gray-600" placeholder="Destination" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>

      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Date</div>
        <input type="date" value={today} className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>

      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Time</div>
        <input type="time" className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <button type="submit" className="w-full py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-colors duration-300 text-white font-semibold text-lg mt-2">
      Search
    </button>
  </form>
);

const ByHourForm = () => (
  <form className="flex flex-col gap-1">
    <div className="bg-gray-100 rounded p-2 flex items-start gap-3">
      <span className="mt-1 text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
    </svg>

      </span>
      <div className="w-full">
        <div className="font-semibold  text-black text-left">From</div>
        <input className="bg-transparent outline-none w-full text-gray-600" placeholder="Address, airport, hotel, ..." />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b6969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
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
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>
      </span>
      <div className="w-full">
        <div className="font-semibold text-black  text-left">Date</div>
        <input type="date" value={today}  className="bg-transparent outline-none w-full text-gray-600" />
      </div>
    </div>
    <div className="bg-gray-100 rounded p-2 flex items-center gap-3">
      <span className="text-gray-500">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>

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
    <div className="w-full max-w-md mx-auto my-auto bg-white rounded-lg shadow border border-gray-200 p-4">
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