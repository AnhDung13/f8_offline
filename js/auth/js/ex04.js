const apiURL = "https://api.escuelajs.co/api/v1/files/upload";
const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", async () => {
  const imageObj = input.files[0];
  const formData = new FormData();
  formData.append("file", imageObj);
  const reponse = await fetch(apiURL, {
    method: "POST",
    body: formData,
  });
  const data = await reponse.json();
  console.log(data);
});
