import React from "react";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const HotelCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const HotelTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
  margin: 0;
`;

const HotelDetails = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Amenity = styled.li`
  background: #e8f0fe;
  color: #1a73e8;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
`;

const Price = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff6600;
`;

const Policies = styled.ul`
  list-style: disc;
  margin: 0;
  padding-left: 1.5rem;
  color: #555;
`;

const HotelComponent = ({ hotels }) => {
  return (
    <PageContainer>
      <Header>American Hotels</Header>
      <HotelGrid>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id}>
            <HotelTitle>{hotel.name}</HotelTitle>
            <HotelDetails>
              <strong>Location:</strong> {hotel.location}
            </HotelDetails>
            <HotelDetails>
              <strong>Rooms Available:</strong> {hotel.roomsAvailable}
            </HotelDetails>
            <HotelDetails>
              <strong>Rating:</strong> {hotel.rating} / 5
            </HotelDetails>
            <HotelDetails>
              <strong>Distance from City Center:</strong> {hotel.distanceFromCityCenter} km
            </HotelDetails>
            <HotelDetails>
              <strong>Description:</strong> {hotel.description}
            </HotelDetails>

            <div>
              <strong>Amenities:</strong>
              <AmenitiesList>
                {hotel.amenities.map((amenity, index) => (
                  <Amenity key={index}>{amenity}</Amenity>
                ))}
              </AmenitiesList>
            </div>

            <Price>${hotel.pricePerNight} / night</Price>

            <div>
              <strong>Policies:</strong>
              <Policies>
                {hotel.policies.map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </Policies>
            </div>
          </HotelCard>
        ))}
      </HotelGrid>
    </PageContainer>
  );
};

export default HotelComponent;
