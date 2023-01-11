import "./App.css";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import { nanoid } from "nanoid";
import { Component } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ContactsList } from "./Components/ContactsList/ContactsList";
import { SearchField } from "./Components/SearchField/SearchField";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, { contacts }) {
    if (this.state.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  onSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (this.state.contacts.find((el) => el.name === newContact.name)) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, newContact], filter: "" };
    });
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      return { contacts: prevState.contacts.filter((el) => el.id !== id) };
    });
  };

  filtredContacts = () =>
    this.state.contacts.filter((el) =>
      el.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );

  render() {
    return (
      <Section>
        <h1>Phonebook</h1>

        <Form onSubmit={this.onSubmit} />

        <h2>Contacts</h2>

        <SearchField value={this.state.filter} onChange={this.handleFilter} />

        <ContactsList
          contacts={this.filtredContacts()}
          onDelete={this.onDelete}
        />
      </Section>
    );
  }
}

export default App;
const Section = styled.div`
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
