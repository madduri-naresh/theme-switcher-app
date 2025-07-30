import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  padding: ${({ theme }) => theme.layout.padding};
  margin-top: 60px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactParagraph = styled.p`
  font-size: 1rem;
`;

export const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContactContainer theme={theme}>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactParagraph>This is the contact page.</ContactParagraph>
    </ContactContainer>
  );
};
