import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  padding: ${({ theme }) => theme.layout.padding};
  margin-top: 60px;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
`;

export const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutContainer theme={theme}>
      <AboutTitle>About Us</AboutTitle>
      <AboutParagraph>This is the about page.</AboutParagraph>
    </AboutContainer>
  );
};
