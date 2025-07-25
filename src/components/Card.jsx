import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow rounded-lg p-6 transition-colors duration-300 ${className}`}
    >
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
