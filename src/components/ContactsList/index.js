import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

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
            <span>antunesv.eric@gmail.com</span>
            <span>(15)9999-0000</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>

          <div className="info">
            <div className="contact-name">
              <strong>Eric Antunes</strong>
              <small>instagram</small>
            </div>
            <span>antunesv.eric@gmail.com</span>
            <span>(15)9999-0000</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>

          <div className="info">
            <div className="contact-name">
              <strong>Eric Antunes</strong>
              <small>instagram</small>
            </div>
            <span>antunesv.eric@gmail.com</span>
            <span>(15)9999-0000</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
