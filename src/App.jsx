import React, { Component } from 'react';
import ContactList from 'components/ContactList';
import GlobalStyle from 'components/GlobalStyle';
import NewContactForm from 'components/NewContactForm';
import SearchContact from 'components/SearchContact';
import Box from './components/Box';
import sanitizeString from './utils/sanitizeString';
import Section from 'components/Section';

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
  filterHandler = ({ currentTarget: { value } }) => {
    this.setState({
      filter: sanitizeString(value),
    });
  };
  addContactHandler = contact => {
    console.log('contact', contact);
    this.setState(prev => ({
      contacts: [contact, ...prev.contacts],
    }));
  };
  render() {
    const { contacts, filter } = this.state;
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
          <Section mt="10px">
            <Box as="h2">Contacts</Box>
            <SearchContact
              filterHandler={this.filterHandler}
              filterString={this.state.filter}
            />
            <ContactList contactList={contacts} filter={filter} />
          </Section>
        </div>
      </>
    );
  }
}
