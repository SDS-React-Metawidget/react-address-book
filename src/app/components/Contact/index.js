import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Remove from './Remove';

const Contact = ({ id, firstName, lastName, title, type, email, phone, address, details }) => {
  return (
    <tr>
      <td>
        <span>
          <Link to={`/contact/${id}`}>{lastName}, {title} {firstName}</Link>
        </span>
      </td>
      <td>{type}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{details}</td>
      <td><Remove id={id} /></td>
    </tr>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  details: PropTypes.string,
};

export default Contact;
