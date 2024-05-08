// câu lệnh switch case
/* 
- Áp dụng khi có nhiều nhánh
- Có nhiều điều kiện hoặc (||)
- Biểu thức logic là so sánh bằng (===)
*/

// var action = "add";
// switch (action) {
//   case "add":
//     console.log("Thêm");
//     break;
//   case "update":
//     console.log("Cập nhập");
//     break;
//   case "delete":
//   case "remove":
//   case "destroy":
//     console.log("xóa");
//     break;
//   default:
//     console.log("danh sách");
// }

// if (action === "add" || action === "create" || action === "insert") {
//   console.log("Thêm");
// } else if (action === "update" || action === "edit") {
//   console.log("Cập nhật");
// } else if (
//   action === " delete" ||
//   action === "remove" ||
//   action === "destroy"
// ) {
//   console.log("Xóa");
// } else {
//   console.log("Danh sách");
// }

// viết chương trình hiển thị số ngày trong 1 tháng cho trước

var month = 2;

if (month > 0 && month <= 12 && month % 1 === 0) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("tháng " + month + " có 30 ngày");
      break;
    case 2:
      console.log("tháng " + month + " có 28 hoặc 29 ngày");
      break;
    default:
      console.log("tháng " + month + " có 31 ngày");
      break;
  }
} else {
  console.log("vui lòng nhập lại");
}
