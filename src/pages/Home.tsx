import React from 'react';
import styled from 'styled-components';
import HotelImage from '../assets/Hotel1.jpg'; // Import the image

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6; /* Light gray background */
  color: #1f2937; /* Dark gray text */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 800px;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  return (
    <Container>
      <div>
        <Title>Welcome to the Home Page</Title>
        <Subtitle>This is the homepage of our application.</Subtitle>
      </div>
      <StyledImage src={HotelImage} alt="Hotel" />
    </Container>
  );
};

export default Home;
