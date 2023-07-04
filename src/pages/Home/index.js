/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';

import {
  Card,
  Container,
  EmptyListAfterSearch,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

import Button from '../../components/Button';

import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import question from '../../assets/images/magnifier-question.svg';
import Modal from '../../components/Modal';
import useHome from './useHome';

export default function Home() {
  const {
    contacts,
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {
        contacts.length > 0 && (
          <InputSearchContainer>
            <input
              value={searchTerm}
              type="text"
              placeholder="Pesquisar contato..."
              onChange={handleChangeSearchTerm}
            />
          </InputSearchContainer>
        )
      }
      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length < 1
              ? 'center'
              : 'space-between'
}
      >
        {
          (!hasError && contacts.length > 0) && (
            <strong>
              {filteredContacts.length}
              {filteredContacts.length === 1 ? ' contato' : ' contatos'}
            </strong>
          )
        }
        <Link
          to="/new"
        >
          Novo contato
        </Link>
      </Header>

      {
        hasError
        && (
          <ErrorContainer>
            <img src={sad} alt="Sad" />
            <div className="details">
              <strong>Ocorreu um erro ao obter seus contatos!</strong>
              <Button
                type="button"
                onClick={handleTryAgain}
              >
                Tentar novamente
              </Button>
            </div>
          </ErrorContainer>
        )
      }

      {
        !hasError && (
          <>
            {
              contacts.length < 1 && (
                <EmptyListContainer>
                  <img src={emptyBox} alt="Empty Box" />
                  <p>
                    Você ainda não tem nenhum contato cadastrado! Clique no botão
                    <strong> ”Novo contato”</strong> à cima para cadastrar o seu primeiro!
                  </p>
                </EmptyListContainer>
              )
            }

            { filteredContacts.length > 0
              && (
                <ListHeader orderBy={orderBy}>
                  <header>
                    <button
                      type="button"
                      onClick={handleToggleOrderBy}
                    >
                      <span>Nome</span>
                      <img src={arrow} alt="Arrow" />
                    </button>
                  </header>
                </ListHeader>
              )}

              {
                (contacts.length > 0 && filteredContacts < 1)
                && (
                  <EmptyListAfterSearch>
                    <img src={question} alt="Question" />
                    <span>Nenhum resultado foi encontrado
                      para <strong>”{searchTerm}”</strong>.
                    </span>
                  </EmptyListAfterSearch>
                )
              }

            {filteredContacts.map((contact) => (
              <Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category.name && <small>{contact.category.name}</small>}
                  </div>
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>
                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeleteContact(contact)}
                  >
                    <img src={trash} alt="Delete" />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )
      }
    </Container>
  );
}
