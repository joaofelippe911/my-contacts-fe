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

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && contacts.length < 1);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {
        hasContacts && (
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
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {
        hasContacts && (
          <>
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
