import { config } from "./config.js";
export const httpClient = {
  serverApi: config.SERVER_API ?? null,
  token: null,
  refreshTokenPromise: null,
  send: async function (url, method = "GET", body = null, headers = {}) {
    try {
      if (!this.serverApi) {
        throw new Error("Vui lòng cập nhật serverApi");
      }
      url = this.serverApi + url;
      headers["Content-Type"] = "application/json";
      if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`;
      }
      const options = {
        method,
        headers,
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Err");
      }
      const data = response.json();

      return { response, data };
    } catch (e) {}
  },

  getNewAccessToken: async function () {
    try {
      const { refresh_token } = JSON.parse(localStorage.getItem("login_token"));
      const { response, data } = await this.post("/auth/refresh-token", {
        refreshToken: refresh_token,
      });
      if (!response.ok) {
        throw new Error("Refresh token không hợp lệ");
      } else {
        const newToken = await data;
        localStorage.setItem("login_token", JSON.stringify(newToken));
      }
    } catch {
      return false;
    }
  },
  get: function (url, headers = {}) {
    return this.send(url, "GET", null, headers);
  },
  post: async function (url, body, headers = {}) {
    return await this.send(url, "POST", body, headers);
  },
  put: function (url, body, headers = {}) {
    return this.send(url, "PUT", body, headers);
  },
  patch: function (url, body, headers = {}) {
    return this.send(url, "PATCH", body, headers);
  },
  delete: function (url, headers = {}) {
    return this.send(url, "DELETE", null, headers);
  },
};

/*
const client = httpClient();
client.get('/users')
*/
