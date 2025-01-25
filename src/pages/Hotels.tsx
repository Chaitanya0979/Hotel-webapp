import React, { useState } from 'react';
import Filter from '../components/Filter';
import hotelsData from '../mock/data.json';
import styled from 'styled-components';
import HotelComponent from '../components/Hotel';

// Styled Components
const PageContainer = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const HotelList = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 items per row */
  gap: 1.5rem;  /* Adjust the space between items */
`;

const HotelItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const HotelTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #444;
`;

const HotelDetails = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ff6600;
`;

// Hotels Component
const Hotels = () => {
  const [hotels, setHotels] = useState(hotelsData);
  
  const filterHotels = (data: typeof hotelsData, query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((hotel) =>
      Object.values(hotel).some((value) =>
        value.toString().toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  const handleSearch = (query: string) => {
    const filteredHotels = filterHotels(hotelsData, query);
    setHotels(filteredHotels);
  };
  
  return (
    <PageContainer>
      <div className="text-center mb-8">
        <div className="text-xl font-semibold text-gray-800 mb-4">
          Welcome to the Hotel Booking App
        </div>
        <Header>Hotel Booking System</Header>
      </div>

      <Filter onSearch={handleSearch} />

    
        
          <HotelComponent hotels = {hotels}/>

    </PageContainer>
  );
};

export default Hotels;
