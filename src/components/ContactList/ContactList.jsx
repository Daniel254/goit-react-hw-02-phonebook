import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import { List } from './ContactList.styled';
import sanitizeString from 'utils/sanitizeString';

function FilteredList({ listItems, message }) {
  return (
    <>
      {listItems.length > 0 ? (
        <List>
          {listItems.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </List>
      ) : (
        <Notification message={message} />
      )}
    </>
  );
}

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
    const { contactList, filter } = this.props;
    const filteredContactList = contactList.filter(item =>
      sanitizeString(item.name).includes(filter)
    );

    return (
      <>
        {contactList.length > 0 ? (
          <FilteredList
            filter={filter}
            filterHandler={this.filterHandler}
            listItems={filteredContactList}
            message="No contacts found"
          />
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </>
    );
  }
}
