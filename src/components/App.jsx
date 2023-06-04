import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  
  handleAddContact = (newContact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact with name ${newContact.name} already exists.`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = (contactId) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  }));
  };
  
  render() {
    const { contacts, filter } = this.state;
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  };
     const titleStyle = {
    fontSize: '24px',
  };
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2 style={titleStyle}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}