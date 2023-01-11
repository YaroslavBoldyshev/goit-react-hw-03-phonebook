import PropTypes from "prop-types";
import styled from "styled-components";
import { ContactListItem } from "../ContactListItem/ContactListItem";

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ListOfContacts>
      {contacts.map((contact) => {
        return (
          <ContactListItem
            contact={contact}
            key={contact.id}
            onDelete={onDelete}
          />
        );
      })}
    </ListOfContacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
