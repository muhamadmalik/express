class UsersStorage {
  constructor() {
    this.storage = {
      3: {
        id: 3,
        firstName: 'david',
        lastName: 'sdf',
        email: 'davidprocter951@gmail.com',
        age: 24,
        bio: 'This is the bio of the default character.',
      },
    };
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  searchUser(firstName) {
    return Object.values(this.storage).find((item) => {
      return item.firstName === firstName;
    });
  }
}

export default new UsersStorage();
