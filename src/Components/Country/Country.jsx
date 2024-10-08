import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryCard = ({ name, flag, abbr }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "8px",
        width: "200px",
        height: "200px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img
        src={flag}
        style={{ width: "200px", height: "120px", padding: "10px" }}
        alt={`Flag of ${abbr}`}
      />
      <h4>{name}</h4>
    </div>
  );
};

function Country() {
  const [countries, setCountries] = useState([]);
  const API_URL = `https://xcountries-backend.azurewebsites.net/all`;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log(JSON.stringify(data, null, 2));
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          name={country.name}
          flag={country.flag}
        />
      ))}
    </div>
  );
}

export default Country;





