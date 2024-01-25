import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setCities] = useState([]);
  const [city, setCity]=useState()

  // Fetch the list of provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('http://localhost:3000/province');
        const dataa = await response.json();
        const data = await dataa.rajaongkir.results
        setProvinces(data);
      } catch (error) {
        console.error('Error fetching provinces:', error.message);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch cities when the selected province changes
  useEffect(() => {
    const fetchCitiesByProvince = async () => {
      if (selectedProvince) {
        try {
          const response = await fetch(`http://localhost:3000/city/${selectedProvince}`);
          const dataa = await response.json();
          const data = dataa.rajaongkir.results
          console.log(data)
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error.message);
        }
      }
    };

    fetchCitiesByProvince();
  }, [selectedProvince]);

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    setSelectedProvince(selectedProvinceId);
  };
  const handleCityChange = (event) => {
    const set = event.target.value;
    setCity(set)
  };
  
 console.log(city)
  return (
    <div>
      <label htmlFor="province">Select Province:</label>
      <select id="province" onChange={handleProvinceChange} value={selectedProvince}>
        <option value="">Select Province</option>
        {provinces.map((province) => (
          <option key={province.province_id} value={province.province_id}>
            {province.province}
          </option>
        ))}
      </select>

      <label htmlFor="city">Select City:</label>
      <select id="city"  onChange={handleCityChange} value={selectedCity}>
        <option value="">Select City</option>
        {selectedCity.map((city) => (
          <option key={city.city_id} value={city.city_id}>
            {city.city_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YourComponent;
