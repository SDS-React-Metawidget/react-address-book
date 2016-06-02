import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { selectContact } from 'app/actions/contact';
import Contact from 'app/components/Contact';

// import styles from './styles.styl';


@asyncConnect({
  promise: (params, { store: { dispatch } }) => {
    const promises = [];

    dispatch(selectContact(params.id));

    return Promise.all(promises);
  },
})
@connect(state => {
  return {
    contact: state.contacts.contacts[state.contact.id],
  };
})
export default class ContactView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contact: PropTypes.object,
  };

  /*
    Select Bootstrap HTML elements to structure the view contact template.
    Remember, you virtually look up a component on their website and copy
    and paste the code...first look over the components and think of which
    ones would work together in this template to display the 'contact'.

    Here an example of HTML being populated by the current available 'contact'
    attributes
    <td>
      <span><Link to={`/contact/${id}`}>{lastName}, {firstName}</Link></span>
    </td>
    <td>{details}</td>
    
    Keep the Helment element and try adding Bootstrap button classes to the Link
    elements.

    <Contact {...contact} />
  */
  render() {
    const { contact } = this.props;
    return (
      <div>
        <Helmet title="Viewing contact | React Address Book" />

        <div className="container">
          <div className="row">
            
         

            <div className="row page-header">
              
              <div className="col-md-4 text-center">
                <div className="panel panel-default">
                  <div className="panel-body">
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <h1>{contact.firstName} {contact.lastName} <small>Business</small>
                </h1>
              </div>

            </div>

          </div>

          <div className="row">

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Title:</strong></p></div>
                <div className="col-md-8"><p>Mr.</p></div>
              </div>

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Name:</strong></p></div>
                <div className="col-md-8"><p>{contact.firstName} {contact.lastName}</p></div>
              </div>

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Type:</strong></p></div>
                <div className="col-md-8"><p>Business</p></div>
              </div>

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Phone Number:</strong></p></div>
                <div className="col-md-8"><p>000 000 000</p></div>
              </div>

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Email Address:</strong></p></div>
                <div className="col-md-8"><p>{contact.details}</p></div>
              </div>

              <div className="row">
                <div className="col-md-4 text-right"><p><strong>Address:</strong></p></div>
                <div className="col-md-8">
                  <p>
                    <address>15 Broadway,<br/>
                      Ultimo NSW 2007
                    </address>
                  </p>
                </div>
              </div>

              <hr/>

          </div>

        </div>
        <Link className="btn btn-default" to={`/contact/${contact.id}/edit`}>
          <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;
          <span>Edit</span>
        </Link>
        &nbsp;
        <Link className="btn btn-default" to="/">
          <span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;
          <span>Home</span>
        </Link>
      </div>
    );
  }
}
