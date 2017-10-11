import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ title }) => (
  <h1 className="pink search">{title}</h1>
);

Search.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Search;
