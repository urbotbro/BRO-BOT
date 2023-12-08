import React from 'react'; // Make sure to import React
import { HomeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'; // Import the Image component

const Countrydata = [
  { name: 'USA', rise: true, value: 21942.83, id: 1 },
  { name: 'Ireland', rise: false, value: 19710.0, id: 2 },
  { name: 'Ukraine', rise: false, value: 12320.3, id: 3 },
  { name: 'Sweden', rise: true, value: 9725.0, id: 4 },
];

function TopCountries() {
    return (
      <div className="flex p-4 flex-col h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Top Countries</div>
          <HomeIcon path="res-react-dash-plus" className="w-5 h-5" />
        </div>
        <div className="">favourites</div>
        {Countrydata.map(({ name, rise, value, id }) => (
          <div className="flex items-center mt-3" key={id}>
            <div className="">{id}</div>
            <Image path={`res-react-dash-flag-${id}`} className="ml-2 w-6 h-6" />
            <div className="ml-2">{name}</div>
            <div className="flex-grow" />
            <div className="">${value.toLocaleString()}</div>
            <HomeIcon
              path={rise ? 'res-react-dash-country-up' : 'res-react-dash-country-down'}
              className="w-4 h-4 mx-3"
            />
            <HomeIcon path="res-react-dash-options" className="w-2 h-2" />
          </div>
        ))}
        <div className="flex-grow" />
        <div className="flex justify-center">
          <div className="">Check All</div>
        </div>
      </div>
    );
  }

export default TopCountries;
