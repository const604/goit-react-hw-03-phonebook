import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <Button type="submit" onClick={onDeleteContact}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactItem;
