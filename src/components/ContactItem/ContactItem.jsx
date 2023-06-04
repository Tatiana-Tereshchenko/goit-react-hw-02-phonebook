import { Component } from 'react';
import PropTypes from 'prop-types'; 
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

ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};