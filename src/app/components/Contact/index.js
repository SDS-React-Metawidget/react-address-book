import React, { PropTypes } from 'react';


const Contact = ({ firstName, lastName, details }) => {
  return (
    <div>
      <span>{lastName}, {firstName} | {details}</span>
    </div>
  );
};

Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  details: PropTypes.string,
};

export default Contact;
