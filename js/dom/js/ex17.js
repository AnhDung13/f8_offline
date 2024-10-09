//Class

class Person {
  name = "Hoàng An";
  email = "hoangan.web@gmail.com";
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  constructor() {
    console.log("Person Constructor");
  }
}

class User extends Person {
  constructor() {
    super();
    console.log("User Constructor");
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}

var user = new User();
console.log(user.getInfo());

//Tạo ra class kế thừa từ HTMLElement

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "Học js không khó";
  }
}

// Đăng ký class HelloWorld thành 1 thẻ html

customElements.define("hello-world", HelloWorld);

// --> Web Component
