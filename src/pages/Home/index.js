import {
  Container,
} from './styles';

import Loader from '../../components/Loader';

import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';
import Modal from '../../components/Modal';

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

      {
        contacts.length > 0 && (
          <InputSearch
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        )
      }

      <Header
        hasError={hasError}
        contactsLength={contacts.length}
        filteredContactsLength={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {
        !hasError && (
          <>
            {(contacts.length < 1 && !isLoading) && <EmptyList />}

            {
              (contacts.length > 0 && filteredContacts < 1)
              && (
                <SearchNotFound searchTerm={searchTerm} />
              )
            }

            <ContactsList
              filteredContacts={filteredContacts}
              onDeleteContact={handleDeleteContact}
              onToggleOrderBy={handleToggleOrderBy}
              orderBy={orderBy}
            />

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
          </>
        )
      }
    </Container>
  );
}
