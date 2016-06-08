export default class Contact {
  constructor({ id, firstName, lastName, details, type, title, email, phone, address }) {
    Object.defineProperties(this, {
      id: {
        enumerable: true,
        value: null,
        writable: true,
      },
      firstName: {
        enumerable: true,
        value: null,
        writable: true,
      },
      lastName: {
        enumerable: true,
        value: null,
        writable: true,
      },
      details: {
        enumerable: true,
        value: null,
        writable: true,
      },
      type: {
        enumerable: true,
        value: null,
        writable: true,
      },
      title: {
        enumerable: true,
        value: null,
        writable: true,
      },
      email: {
        enumerable: true,
        value: null,
        writable: true,
      },
      phone: {
        enumerable: true,
        value: null,
        writable: true,
      },
      address: {
        enumerable: true,
        value: null,
        writable: true,
      },
    });
    Object.seal();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.details = details;
    this.type = type;
    this.title = title;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  update(details = {}) {
    Object.entries(details)
      .filter(([, detail]) => detail)
      .forEach(([key, detail]) => {
        this[key] = detail;
      });
    return this;
  }
}
