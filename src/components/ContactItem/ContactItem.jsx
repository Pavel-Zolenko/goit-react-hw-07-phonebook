import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Number, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, phone }) => {
  
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <span>{name}: </span>
      <Number>{number || phone }</Number>
      <DeleteBtn type="button"  onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  phone: PropTypes.string.isRequired,

};