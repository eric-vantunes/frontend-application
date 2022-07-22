import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function ContactList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>

          <div className="info">
            <div className="contact-name">
              <strong>Eric Antunes</strong>
              <small>instagram</small>
            </div>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
