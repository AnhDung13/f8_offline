/*
Web Component: chia nhỏ thành phần trang web thành các thẻ html riêng biệt, 
dễ dàng tái sử dụng
- header
- footer
- product

Khi nào cần tách web component
- sử dụng ở nhiều nơi
- linh hoạt (chỉ cần gọi thẻ html)
- logic, giao diện phức tạp

Các bước định nghĩa component

- Xây dựng class tương ứng (Kế thừa từ HTMLElement)
- Xác định logic cần có trong component
- Đăng ký thẻ html (Lưu ý: Tên thẻ phải có 2 từ và nối bằng gạch ngang)

Lifecycle Callback
- Vòng đời khi 1 component được tạo ra đến khi nó bị loại bỏ khỏi DOM
- 3 giai đoạn: 
+ Khởi tạo
+ Cập nhật
+ Loại bỏ

Khi làm việc với web component --> giải quyết được vấn đề css (Scope Stylesheet) --> SHADOW DOM
*/

class TodoApp extends HTMLElement {
  static observedAttributes = ["data-count"];
  shadowRoot = this.attachShadow({ mode: "open" });
  connectedCallback() {
    this.render();
    this.addTodo();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <h1>Todo App</h1>
    <ul>
     <li>Todo 1</li>
     <li>Todo 2</li>
     <li>Todo 3</li>
    </ul>
    <form>
    <input type="text" placeholder="Name...">
    <button type="submit">Add</button>
    </form>
    <style>h1{color:red;}</style>
    `;
  }
  addTodo() {
    var form = this.shadowRoot.querySelector("form");
    var _this = this;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      _this.handleAddTodo(e.target);
    });
  }
  handleAddTodo(event) {
    var nameEl = event.querySelector("input");
    var name = nameEl.value;
    var ul = this.shadowRoot.querySelector("ul");
    ul.innerHTML += `<li>${name}</li>`;
    nameEl.value = "";
  }
  //   disconnectedCallback() {
  //     console.log("Component bị loại khỏi DOM");
  //   }
  //   attributeChangedCallback(name, oldValue, newValue) {
  //     console.log(
  //       `Thay đổi thuộc tính ${name}, giá trị cũ ${oldValue}, giá trị mới ${newValue}`
  //     );
  //   }
}
customElements.define("todo-app", TodoApp);
var btn = document.querySelector(".btn");
var todoAppEl = document.querySelector("todo-app");
// btn.addEventListener("click", function () {
//   //   todoAppEl.remove();
//   todoAppEl.dataset.count++;
// });

/*
- template, slot ??
- custom attribute ??
*/
