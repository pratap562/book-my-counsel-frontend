import React, { useState, useEffect } from 'react';

import './AdvocateList.css';

const Advocate = ({
  name,
  picture,
  role_title,
  location,
  pricing,
  total_Earnings,
  total_worked_hour,
  short_description,
  total_jobs,
  fluent_language,
  conversational_language

}) => {
  return (
    <div className="advocate">
         <div className='display-flex'>
      <img className="advocate-picture" src={picture} alt={`${name}'s picture`} />
      <div>
      <h2 className="advocate-name">{name}</h2>
      <h3 className="advocate-role">{role_title}</h3>
      <div className='display-flex'>
      <p className="advocate-location">{location}</p>
      <p className="advocate-pricing"><b>Pricing:</b> {pricing}</p>
      <p className="advocate-earnings"><b>Total Earnings:</b> {total_Earnings}</p>
      <p className="advocate-worked-hours"><b>Total Worked Hour:</b> {total_worked_hour}</p>
      </div>
      <p className="advocate-jobs"><b>Total Jobs: </b>{total_jobs}</p>
      <div className='display-flex'>
      <p className="advocate-fluent-languages"><b>Fluent Languages:</b> {fluent_language.join(', ')}</p>
      <p className="advocate-conversational-languages"><b>Conversational Languages:</b> {conversational_language.join(', ')}</p>
      </div>
      <p className="advocate-description">{short_description}</p>
    </div>
    </div>

    </div>
  );
};



const AdvocateList = ({ advocates }) => {
  return (
    <div>
      {advocates.map(advocate => (
        <Advocate {...advocate} key={advocate._id} />
      ))}
    </div>
  );
};
  

const App = () => {
  const [advocates, setAdvocates] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [sorting, setSorting] = useState('asc');

  // Fetch advocates from API using query params for filtering and sorting
  useEffect(() => {
    const fetchAdvocates = async () => {
      const url = `/api/advocates?location=${selectedLocation}&role=${selectedRole}&sort=${sorting}`;
      const response = await fetch(url);
      const data = await response.json();
      setAdvocates(data);
    };

    fetchAdvocates();
  }, [selectedLocation, selectedRole, sorting]);

  // Fetch locations and roles for filtering options
  useEffect(() => {
    const fetchFilters = async () => {
      const url = '/api/filters';
      const response = await fetch(url);
      const data = await response.json();
      setLocations(data.locations);
      setRoles(data.roles);
    };

    fetchFilters();
  }, []);


  // Handle filter and sorting changes
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <div className="filtered-advocate-list">
      <div className="filter-section">
        <h2>Filter by:</h2>
        <div className="filter-option">
          <label htmlFor="location-select">Location:</label>
          <select id="location-select" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-option">
          <label htmlFor="role-select">Role:</label>
          <select id="role-select" value={selectedRole} onChange={handleRoleChange}>
            <option value="">All</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))
            }
          </select>
        </div>
        <div className="filter-option">
          <label htmlFor="sorting-select">Sort by:</label>
          <select id="sorting-select" value={sorting} onChange={handleSortingChange}>
            <option value="asc">Price (Low to High)</option>
            <option value="desc">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="advocate-list-section">
        <AdvocateList advocates={advocates} />
      </div>
    </div>
  );
};

export default App;