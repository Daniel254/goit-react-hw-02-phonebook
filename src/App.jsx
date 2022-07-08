import ContactList from 'components/ContactList';
import GlobalStyle from 'components/GlobalStyle';
import NewContactForm from 'components/NewContactForm';
import React, { Component } from 'react';
import Box from './components/Box';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContactHandler = contact => {
    console.log('contact', contact);
    this.setState(prev => ({
      contacts: [contact, ...prev.contacts],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <>
        <GlobalStyle />
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'start',
            // fontSize: 40,
            color: '#010101',
            margin: '0 auto',
            width: '400px',
          }}
        >
          <Box as="h1" mx="auto">
            Phonebook
          </Box>
          <NewContactForm addContact={this.addContactHandler} />
          <ContactList contactList={contacts} />
        </div>
      </>
    );
  }
}
