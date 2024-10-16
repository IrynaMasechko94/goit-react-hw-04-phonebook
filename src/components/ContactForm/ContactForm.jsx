import React, { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formName}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChangeName}
            placeholder="Enter your name"
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formNumber}
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChangeNumber}
            placeholder="Enter your number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
