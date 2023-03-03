import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/component/navbar'
import style from './style.module.css'


const Advocate = ({
  id,
  name,
  picture,
  role_title,
  location,
  pricing,
  total_worked_hour,
  short_description,
  total_jobs,
  fluent_language,
  conversational_language

}) => {
  return (
    <>
      {/* <div><Navbar></Navbar></div> */}
      <div className={style.advocate}>
        <div className={style["display-flex"]} >
          <img className={style["advocate-picture"]} src={picture} alt={`${name}'s picture`} />
          <div>
            <h2 className={style["advocate-name"]} >{name}</h2>
            <h3 className={style["advocate-role"]} >{role_title}</h3>
            <div className={style["display-flex"]} >
              <p className={style["advocate-location"]} ><b>Location:</b>{location}</p>
              <p className={style["advocate-pricing"]} ><b>Pricing:</b> {pricing}</p>
              {/* <p className={style["advocate-earnings"]} ><b>Total Earnings:</b> {total_Earnings}</p> */}
              <p className={style["advocate-worked-hours"]}><b>Total Worked Hour:</b> {total_worked_hour}</p>
            </div>
            <p className={style["advocate-jobs"]}><b>Total Jobs: </b>{total_jobs}</p>
            <div className={style["display-flex"]}>
              <p className={style["advocate-fluent-languages"]}><b>Fluent Languages:</b> {fluent_language.join(', ')}</p>
              <p className={style["advocate-conversational-languages"]}><b>Conversational Languages:</b> {conversational_language.join(', ')}</p>
            </div>
            <p className={style["advocate-description"]}>{short_description}</p>
          </div>
        </div>

      </div>
    </>
  );
};



const AdvocateList = ({ advocates }) => {

  const handleAdvocateClick = (id) => {

    console.log(id)
    Router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/advocate/profile/${id}`)
    // do something with the clicked advocate's id
    console.log(`Advocate with id ${id} was clicked`);
    // alert(id)
  };
  return (
    <div className='helllllllllllo'>
      {advocates.map(advocate => (
        <div key={advocate._id} onClick={() => handleAdvocateClick(advocate._id)}>
          <Advocate {...advocate} />
        </div>
      ))}
    </div>
  );
};


const App = () => {
  const [advocates, setAdvocates] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [sorting, setSorting] = useState('asc');

  // Fetch advocates from API using query params for filtering and sorting
  useEffect(() => {
    const fetchAdvocates = async () => {

      let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer?`;
      if (selectedLocation) {
        url += `location=${selectedLocation}&`;
      }
      if (selectedRole) {
        url += `role_title=${selectedRole}&`;
      }
      if (sorting) {
        url += `sort=${sorting}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setAdvocates(data);

    };

    fetchAdvocates();
  }, [selectedLocation, selectedRole, sorting]);


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
    <div className={style["filtered-advocate-list"]}>
      <div className={style["filter-section"]}>
        <h2>Filter by:</h2>
        <div className={style["filter-option"]}>
          <label htmlFor="location-select">Location:</label>
          <select id="location-select" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">All</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Assam">Assam</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Chennai">Chennai</option>
            <option value="Rishikesh">Rishikesh</option>
          </select>
        </div>
        <div className={style["filter-option"]}>
          <label htmlFor="role-select">Role:</label>
          <select id="role-select" value={selectedRole} onChange={handleRoleChange}>
            <option value="">All</option>

            <option value="Property & Civil Matters">Property & Civil Matters</option>
            <option value="Money Recovery">Money Recovery</option>
            <option value="Matrimonial">Matrimonial</option>
            <option value="Buisness Consultation">Buisness Consultation</option>
            <option value="Notices">Notices</option>
            <option value="Agreements & Documentation">Agreements & Documentation</option>

          </select>
        </div>
        <div className={style["filter-option"]}>
          <label htmlFor="sorting-select">Sort by:</label>
          <select id="sorting-select" value={sorting} onChange={handleSortingChange}>
            <option value="">All Prices</option>
            <option value="asc">Price (Low to High)</option>
            <option value="desc">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className={style["advocate-list-section"]}>
        <AdvocateList advocates={advocates} />
      </div>
    </div>
  );
};

export default App;