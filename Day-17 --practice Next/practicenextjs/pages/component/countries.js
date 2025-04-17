import { useState, useRef } from "react";

export default function CountryList() {
  const [countryData, setCountryData] = useState([]);
  const countryInputRef = useRef(null);

  
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://67ec9a38aa794fb3222e33a3.mockapi.io/nameofcountries/Countries");
      const data = await response.json();
      
      setCountryData(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  
  const addCountry = async () => {
    const newCountry = countryInputRef.current.value.trim();
    if (!newCountry) return;

    try {
      const response = await fetch("https://67ec9a38aa794fb3222e33a3.mockapi.io/nameofcountries/Countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Countryname: newCountry }),
      });

      if (!response.ok) throw new Error("Failed to add country");

      const addedCountry = await response.json();
      setCountryData([...countryData, addedCountry]); 
      countryInputRef.current.value = ""; 
    } catch (error) {
      console.error("Error adding country:", error);
    }
  };

  useState(() => {
    fetchCountries();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-3 text-center">Country List</h2>

      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          ref={countryInputRef}
          placeholder="Enter country name"
          className="flex-1 p-2 border rounded-lg outline-none"
        />
        <button
          onClick={addCountry}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="divide-y divide-gray-300">
        {countryData.map((country, index) => (
          <li key={index} className="py-2 px-4 hover:bg-gray-100 rounded-md transition duration-200">
           {country.Countryname &&  <span className="font-semibold">{country.id }. </span>}
           {country.Countryname}
          </li>
        ))}
      </ul>
    </div>
  );
}
