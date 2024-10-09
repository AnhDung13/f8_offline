const userApiUrl = "http://localhost:3000/users";
const getUsers = async (params = {}) => {
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }
  const response = await fetch(userApiUrl + query);
  const data = await response.json();
  //Tính tổng số trang = tổng số bản ghi / số bản ghi của 1 trang
  const totalRecords = response.headers.get("x-total-count");
  data.totalPages = Math.ceil(totalRecords / params._limit);
  data.recordNumber = data.length;
  renderTable(data);
  renderPagination(data.totalPages);
};
const getUser = async (id, data) => {
  try {
    const response = await fetch(userApiUrl + "/" + id);
    data = await response.json();
    changeFormUpdate(data);
    if (!response.ok) {
      throw new Error("User not exist");
    }
  } catch (e) {
    alert(e.message);
  }
};
const updateUser = async (id, data) => {
  try {
    const response = await fetch(userApiUrl + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const deleleUser = async (id) => {
  try {
    if (confirm("Are you sure?")) {
      const response = await fetch(userApiUrl + "/" + id, {
        method: "DELETE",
      });
    }
    if (params._page === data.totalPages && data.recordNumber === 1) {
      params._page--;
    }
    getUsers(params);
  } catch (e) {
    alert(e.message);
  }
};
const renderTable = (user) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${user
    .map(
      ({ id, name, email, status }, index) => ` <tr>
            <td>${index + 1}</td>
            <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td>
              <span class="badge bg-${
                status === "active" ? "success" : "warning"
              }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span>
            </td>
            <td><button class="btn btn-warning" data-id="${id}" data-action="edit">Sửa</button></td>
            <td><button class="btn btn-danger" data-id="${id}" data-action="delete">Xóa</button></td>
          </tr>`
    )
    .join(" ")}`;
};
const renderPagination = (totalPages) => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.innerHTML = `
       <ul class="pagination pagination-sm">
         ${
           params._page === 1
             ? " "
             : ` <li class="page-item">
            <a class="page-link Previous" href="#">
              &laquo;
            </a>
          </li>`
         }
          ${Array.from(
            Array(totalPages)
              .keys()
              .map(
                (
                  _,
                  index
                ) => `<li class="page-item"><a class="page-link page-number ${
                  index === params._page - 1 ? "active" : ""
                }" href="#">${index + 1}</a></li>
          `
              )
          ).join("")}
          ${
            params._page === totalPages
              ? ""
              : `<li class="page-item">
            <a class="page-link Next" href="#">
             &raquo;
            </a>
          </li>`
          }
        </ul>`;
};
const changeFormUpdate = ({ id, name, email, status }) => {
  const form = document.querySelector(".form-update");
  form.previousElementSibling.innerText = "Cập nhập người dùng";
  form.dataset.id = id;
  form.elements.name.value = name;
  form.elements.email.value = email;
  form.elements.status.value = status;
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "Hủy";
  closeBtn.classList.add("btn", "btn-secondary");
  if (!form.lastElementChild.classList.contains("btn-secondary"))
    closeBtn.addEventListener("click", () => {
      closeFormUpdate();
      closeBtn.remove();
    });
};
const addUser = async (data) => {
  try {
    const response = await fetch(userApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    if (!form.dataset.id) {
      const status = await addUser(formData);
      if (status) {
        getUsers(params);
        form.reset();
      } else {
        alert("Thêm thất bại");
      }
    } else {
      const id = form.dataset.id;
      const status = await updateUser(id, formData);
      if (status) {
        getUsers(params);
        closeFormUpdate();
      } else {
        alert("Sửa thất bại");
      }
    }
  });
};
const closeFormUpdate = () => {
  const form = document.querySelector(".form-update");
  form.reset();
  delete form.dataset.id;
  form.previousElementSibling.innerHTML = "Thêm người dùng";
};
const addEventActionBtn = () => {
  const tbody = document.querySelector(".table tbody");
  tbody.addEventListener("click", ({ target }) => {
    if (target.dataset.action === "edit") {
      getUser(target.dataset.id);
    } else if (target.dataset.action === "delete") {
      deleleUser(target.dataset.id);
    }
  });
};
const addEventFilterForm = () => {
  const form = document.querySelector(".filter-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { status, keyword } = Object.fromEntries([...new FormData(form)]);
    if (status === "active" || status === "inactive") {
      params.status = status;
    } else {
      delete params.status;
    }
    if (keyword) {
      params.q = keyword;
    } else {
      delete params.q;
    }
    getUsers(params);
  });
};
const addEventSort = () => {
  const sortItems = document.querySelectorAll(".sort-item");
  sortItems.forEach((sortItem) => {
    sortItem.addEventListener("click", (e) => {
      const itemActive = document.querySelector(".sort-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      e.target.classList.add("active");
      const value = e.target.dataset.value;

      params._order = value === "latest" ? "desc" : "asc";
      getUsers(params);
    });
  });
};
const addEventChangePagination = () => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page-number")) {
      const pageNumber = +e.target.innerText;
      params._page = pageNumber;
      getUsers(params);
    } else if (e.target.classList.contains("Next")) {
      params._page++;
      getUsers(params);
    } else if (e.target.classList.contains("Previous")) {
      params._page--;
      getUsers(params);
    }
  });
};
const params = { _sort: "id", _order: "desc", _limit: 2, _page: 1 };
const data = {
  totalPages: 1,
  recordNumber: 0,
};
getUsers(params);
addEventSort();
addEventFilterForm();
addEventActionBtn();
addEventFormSubmit();
addEventChangePagination();
