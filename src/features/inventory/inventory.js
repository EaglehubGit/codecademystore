import React, { useEffect } from 'react';
import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { addItem } from '../cart/cartSlice.js';
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch, searchTerm }) => {
  // Load the inventory data on mount.
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  // Filter the inventory using the search term.
  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredInventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return (
    <ul id="inventory-container">
      {filteredInventory.map(createInventoryItem)}
    </ul>
  );

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
