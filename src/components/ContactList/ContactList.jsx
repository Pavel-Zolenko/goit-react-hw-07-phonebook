import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';

export const ContactList = () => {
  
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, phone, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            number={number}
          />
        ))}
    </ul>
  );
};
