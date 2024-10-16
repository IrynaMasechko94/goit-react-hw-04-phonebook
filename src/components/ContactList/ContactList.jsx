import React from 'react';
import css from './ContactList.module.css';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

