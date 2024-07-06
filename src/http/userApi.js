import request from "./http";

// 获取用户信息
export async function getUserInfo(userVid) {
  return request({
    url: "/web/user?userVid=50157",
    method: "get",
  });
}
