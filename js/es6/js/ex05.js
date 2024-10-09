class User {
  name;
  email;
  #age = 32; // Private
  #data = ["Item 1", "Item 2", "Item 3"];
  static message = "F8";
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  #getAge() {
    return this.#age;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail(), this.#getAge()];
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(item) {
    return this.#data.push(item);
  }
}
const user = new User("Hoàng An", "hoangan@gm.co");
// console.log(user.getInfo());
// console.log(User.message);
user.latest = "Item 4";
console.log(user.latest);
