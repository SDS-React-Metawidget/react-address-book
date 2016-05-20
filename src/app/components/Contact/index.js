import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Remove from './remove';

const Contact = ({ id, firstName, lastName, details }) => {
  return (
    <tr>
      <td>
        <span><Link to={`/contact/${id}`}>{lastName}, {firstName}</Link></span>
      </td>
      <td>{details}</td>
      <td><Remove id={id} /></td>
    </tr>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  details: PropTypes.string,
};

export default Contact;
