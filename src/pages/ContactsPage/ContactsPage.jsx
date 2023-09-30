// components
import Contacts from "components/Contacts";
import Filter from "components/Filter";
import Phonebook from "components/Phonebook";
import Section from "components/Section";
import Container from "./ContactsPage.styled";

// helmet
import { Helmet } from "react-helmet";

export default function ContactsPage() {

  return (
    <Container>

      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Container>
  )
}