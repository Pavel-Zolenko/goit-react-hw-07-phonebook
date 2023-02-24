import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { getError, getIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";


import {
  Container,
  Title,
  SubTitle,
} from './App.styled';


export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  


  return (
    <Container>

        <Toaster position="top-center" reverseOrder={false} />
        <Title>Phonebook</Title>
       <ContactForm/>
      <SubTitle>Contacts</SubTitle>
       {contacts.length > 0 || filter ? (
          <Filter/>
        ) : (
          <Notification msg="No contacts added" />
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>     
     </Container>
  )
};