var content = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eaque atque
dolore dolor qui distinctio totam. Architecto, quos mollitia dolores neque,
eos ea blanditiis eligendi officiis inventore alias quo consectetur.</p>`;
var keyword = " ";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
// content =
//   content.slice(0, position) +
//   `<span>${content.slice(position, position + keyword.length)}</span>` +
//   content.slice(position + keyword.length);
var output = "";
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
content = output + content;
document.body.innerHTML = content;

/*
Ý tưởng 
- B1: tìm vị trí key word
- B2: Tách chuỗi để thêm span vào keyword
- B3: Cắt bỏ chuỗi từ đầu đến hết keyword và lưu lại vào 1 biến
- B4: Lặp lại bước 1
*/
