import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { themes } from '../../themes/themes';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.layout.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const AppTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const ThemeSelect = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;

export const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <AppTitle>Theme Switcher App</AppTitle>
      <ThemeSelect
        onChange={(e) => setTheme(e.target.value)}
        value={Object.keys(themes).find((key) => themes[key as keyof typeof themes] === theme) || 'theme1'}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </ThemeSelect>
    </HeaderContainer>
  );
};
