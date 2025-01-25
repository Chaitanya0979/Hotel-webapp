import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterContainer = styled.footer`
  background: #ccd;
  color: #000;
  padding: 2rem 1rem;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: auto auto 0 auto;
 margin: 0 auto 0 auto; /* Adjust margin */
  margin-top: auto;  /* This will push the footer to the bottom */
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;

const FooterCode = styled.p`
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: 1rem;
`;

// Footer component
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>All material herein © 2024–2025 Altemetrik Pte. Ltd. All Rights Reserved.</FooterText>
      <FooterText>
        Altimetrik Hotel Management is part of Altemetrik Holdings Inc., the world leader in online travel & related services.
      </FooterText>

      <LogosContainer>
        <a href='/'> Contact us </a>
        <a href='/'> Cities </a>
        <a href='/'> Hotels </a>
        <a href='/'> Tearms and conditions </a>
        <a href='/'> Report us </a>
      </LogosContainer>

      <FooterCode>2024-2025 © Altimetrik</FooterCode>
    </FooterContainer>
  );
};

export default Footer;
