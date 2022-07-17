import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
import { List } from './ContactList.styled';
import SearchContact from 'components/SearchContact';
import sanitizeString from 'utils/sanitizeString';

function FilteredList({ filter, listItems, message, filterHandler }) {
  return (
    <>
      <SearchContact filterHandler={filterHandler} filterString={filter} />
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
  state = {
    filter: '',
  };

  filterHandler = ({ currentTarget: { value } }) => {
    this.setState({
      filter: sanitizeString(value),
    });
  };

  render() {
    const { contactList } = this.props;
    const { filter } = this.state;
    const filteredContactList = contactList.filter(item =>
      sanitizeString(item.name).includes(filter)
    );

    return (
      <Section title="Contacts" mt="10px">
        {contactList.length > 0 ? (
          <FilteredList
            filter={filter}
            filterHandler={this.filterHandler}
            listItems={filteredContactList}
            message="No contacts found"
          />
        ) : (
          <Notification message="No contacts" />
        )}
      </Section>
    );
  }
}
