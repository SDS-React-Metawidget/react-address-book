export default class Contact {
  constructor({ id, firstName, lastName, details }) {
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
    });
    Object.seal();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.details = details;
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
