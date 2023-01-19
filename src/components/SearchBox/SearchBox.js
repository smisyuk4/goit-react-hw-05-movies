import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdSearch } from 'react-icons/io';
import { Label, SearchInput, Error, ButtonFind } from "./SearchBox.styled"

const VALIDATION_SCHEMA = yup
  .object({
    film: yup.string().min(3).max(20),
  })
  .required();

export const SearchBox = ({checkParams}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VALIDATION_SCHEMA),
  });
  
  const searchQuery = ({film}) => {
    checkParams(film)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(searchQuery)} autoComplete="off">
      <Label>
        <SearchInput {...register('film', { required: true })}
              title="Search film"
              placeholder="Search film"/>

              <Error>{errors.film?.message}</Error>
              <ButtonFind type='submit'><IoMdSearch size={20}/></ButtonFind>
        </Label>      
    </form>
  );
};

SearchBox.propTypes = {
  checkParams: PropTypes.func.isRequired,
};
