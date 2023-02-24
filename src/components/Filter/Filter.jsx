import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

    const handleFilter = event => {
      dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Put the name for search"
      />
    </FilterLabel>
  );
};
