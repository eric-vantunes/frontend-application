import { Container, Header, ListContainer } from './styles';

export default function ContactList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
          </button>
        </header>
      </ListContainer>

    </Container>
  );
}
