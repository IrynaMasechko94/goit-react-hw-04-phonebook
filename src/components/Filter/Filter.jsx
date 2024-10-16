import React from 'react';
import css from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        type="text"
        className={css.filterName}
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
