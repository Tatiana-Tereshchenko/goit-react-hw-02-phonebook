import { Component } from 'react';
import PropTypes from 'prop-types'; 
// import css from './ContactItem.module.css';
import { nanoid } from 'nanoid'

export class ContactItem extends Component {
    render() {
    const { contact } = this.props;

    return (
        <li>
            {contact.name} - {contact.number}
        </li>
        );
    }
}