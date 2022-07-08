import PropTypes from 'prop-types';
import Box from 'components/Box';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
export default class ContactList extends Component {
  static propTypes = {
    contactList: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { contactList } = this.props;
    return (
      <Section title="Contacts" mt="10px">
        {contactList.length > 0 ? (
          <Box as="ul">
            {contactList.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </Box>
        ) : (
          <Notification message="No contacts" />
        )}
      </Section>
    );
  }
}
