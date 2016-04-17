import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Contact = ({ id, firstName, lastName, details }) => {
  return (
    <div>
      <span><Link to={`/contact/${id}`}>{lastName}, {firstName}</Link> | {details}</span>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  details: PropTypes.string,
};

export default Contact;
