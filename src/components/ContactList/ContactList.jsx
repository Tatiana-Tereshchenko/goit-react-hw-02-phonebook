import { Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types'; 
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDeleteClick = (contactId) => {
    onDeleteContact(contactId);
    };

    return (
    <ul className={css.item_contact}>
        {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
            <p className={css.text}>{contact.name}: {contact.number}</p>
            <button className={css.button} onClick={() => handleDeleteClick(contact.id)}>Delete</button>
        </li>
        ))}
    </ul>
    );
};
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
};