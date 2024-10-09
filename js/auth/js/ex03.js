let token = "My token";
let isExprire = false;
let refreshTokenPromise = null;
const requestRefreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New token: ` + Math.random());
    }, 1000);
  });
};

const requestApi = (url) => {
  setTimeout(async () => {
    if (url === "/course") {
      isExprire = true;
    }
    if (isExprire) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = requestRefreshToken();
      }
      const newToken = await refreshTokenPromise;
      token = newToken;
    }
    console.log("call Api: " + url + " ,Token: " + token);
  });
};
requestApi("/profile");
requestApi("/course");
requestApi("/post");
requestApi("/product");
