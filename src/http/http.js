import axios from "axios";
import router from "@/router";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 请求错误处理
    console.log("Request Error:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 响应后处理
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error.response.status === 401) {
      router.push({ path: "/login", replace: true });
      throw "no auth";
    } else {
      ElMessage({
        message: "请求失败",
        type: "error",
      });
    }
    return Promise.reject(error);
  }
);

export default service;
