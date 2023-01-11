import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../common/Button/Button";

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <ContactInfo>
        {contact.name}: {contact.number}
      </ContactInfo>

      <Button onClick={() => onDelete(contact.id)}>Delete</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

const Item = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ContactInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
