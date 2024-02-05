const { basePath } = require("next/config").default().publicRuntimeConfig;

export const createQueryString = (values: any) => {
  if (!values) {
    return "";
  }
  let query = "";
  let result = {};
  for (const [key, value] of Object.entries(values)) {
    if (value || value === 0 || value === false) {
      result = { ...result, [key]: value };
    }
  }
  Object.entries(result).forEach(([key, value], index) => {
    if (index === Object.keys(result).length - 1) {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}`;
      }
    } else {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}&`;
      }
    }
  });
  return "?" + query;
};

export const _isEmpty = (data: any) => {
  if (typeof data === "object" && data !== null) {
    let objEmpty = true;
    Object.keys(data).forEach((item) => {
      const queryDefault =
        data[item] === null ||
        data[item] === "undefined" ||
        data[item] === undefined ||
        data[item] === "";
      if (!queryDefault) {
        objEmpty = false;
      }
    });
    return objEmpty;
  }
  const queryDefault =
    data === null || data === "undefined" || data === undefined || data === "";
  if (queryDefault) return true;
  if (typeof data === "number") return false;
  if (typeof data === "string") return false;
  const obj = queryDefault ? [] : data;
  return Object.entries(obj).length === 0;
};

export const onImgError = () => {
  return basePath + "/image/no-image.jpeg";
};

export const getAuth = () => {
  let token: string | null = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("webplatformToken");
    if (token != "") {
      return true;
    }
  }
  return false;
};

export const handleLogout = () => {
  localStorage.clear();
  // localStorage.setItem("loginByHeader", "/");
  window.location.replace(`${basePath + "/login"}`);
};
