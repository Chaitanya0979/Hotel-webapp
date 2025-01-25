import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterProps {
  onSearch: (query: string) => void;
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 250px;
  border-radius: 25px ;
  border: 1px solid #ddd;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: #ff6600;
    box-shadow: 0 0 5px rgba(255, 102, 0, 0.6);
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65c00;
  }
`;

const Filter: React.FC<FilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    </SearchContainer>
  );
};

export default Filter;
