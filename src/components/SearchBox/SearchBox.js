// import PropTypes from 'prop-types';
// import * as yup from 'yup';
import { IoMdSearch } from 'react-icons/io';

// let schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });

// npm install react-hook-form

export const SearchBox = () => {
  return (
    <div>
      <IoMdSearch />
      <input type="text" />
    </div>
  );
};

SearchBox.propTypes = {};
