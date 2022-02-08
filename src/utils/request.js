import axios from "axios";
let BASEURL;
if (process.env.NODE_ENV === "development") {
  BASEURL = "/api";
} else {
  if (process.env.type === "test") {
    BASEURL = "/api";
  } else {
    BASEURL = "https://alnda.cn/spider";
  }
}
const service = axios.create({
  // 如果后端运行在本地则将下面的baseURL注释掉
  // baseURL: BASEURL,
  timeout: 2000,
});
// console.log(process.env);
service.interceptors.request.use(
  function (config) {
    // console.log("config:", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  function (response) {
    // console.log("response:", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default service;