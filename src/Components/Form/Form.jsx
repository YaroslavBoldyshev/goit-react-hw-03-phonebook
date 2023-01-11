import PropTypes from "prop-types";
import styled from "styled-components";
import { Component } from "react";
import { Button } from "../common/Button/Button";
import { Label } from "../common/Label/Label";

class Form extends Component {
  state = { name: "", number: "" };
  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <Label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInput}
          />
        </Label>

        <Label>
          Phone Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInput}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactsForm>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};

const ContactsForm = styled.form`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    width: 100px;
  }
`;
