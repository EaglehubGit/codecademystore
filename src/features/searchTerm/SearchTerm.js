import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';


export const SearchTerm = ({ searchTerm, dispatch }) => {
  const onSearchTermChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchTermChange}
      placeholder="Search products..."
    />
  );
};
