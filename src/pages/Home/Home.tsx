import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import axios from 'axios';

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  padding: ${({ theme }) => theme.layout.padding};
  margin-top: 60px;
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SampleParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const SampleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;

export const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <HomeContainer theme={theme}>
      <ContentTitle>Main Content</ContentTitle>
      <SampleParagraph>This is a sample paragraph.</SampleParagraph>
      <SampleButton theme={theme} onClick={handleClick}>Click Me</SampleButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div>
        {products.map((product: any) => (
          <ProductCard key={product.id} theme={theme}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </ProductCard>
        ))}
      </div>
    </HomeContainer>
  );
};
