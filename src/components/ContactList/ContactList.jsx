import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
import { List } from './ContactList.styled';

export default class ContactList extends Component {
  static propTypes = {
    contactList: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { contactList } = this.props;
    return (
      <Section title="Contacts" mt="10px">
        {contactList.length > 0 ? (
          <List>
            {contactList.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </List>
        ) : (
          <Notification message="No contacts" />
        )}
      </Section>
    );
  }
}
