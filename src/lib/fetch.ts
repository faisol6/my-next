import { PUBLIC_API_URL } from "./constants";
type fetchMethod = "GET" | "POST" | "PUT" | "DELETE";

export const fetchWintTokenAPI = async (
  url: string = PUBLIC_API_URL,
  method: fetchMethod = "GET",
  headers = {},
  body = {}
) => {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsInR5cGUiOiJhY3Rva2VuIiwiaWF0IjoxNjI5MTEwMTg5LCJleHAiOjE2MjkxNTMzODl9.bgmIQvBbcACROBsLFduzQgLDwn5xs0VjLMlQtIm19adsH8a7yDm0eCP4hhvYmN47cxSKZ2Rc1r76Nb_FqEdwbYWHTEpWKdj0C-sF-BZveNT4b0krPOCHwTjb6TPZ_mcShIa_tKcrx1srki2ewrXsZvoViD-zvWWSMbI8xuhg384",
      ...headers,
    },
    body: method === "POST" || method === "PUT" ? JSON.stringify(body) : null,
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
};

// export const fetchAPI = async (
//   url: string = PUBLIC_API_URL,
//   method: fetchMethod = "GET",
//   headers = {},
//   body = {}
// ) => {
//   const res = await fetch(url, {
//     method: method,
//     headers: {
//       accept: "*/*",
//       "Content-Type": "application/json",
//       ...headers,
//     },
//     body: method === "POST" || method === "PUT" ? JSON.stringify(body) : null,
//   });

//   const json = await res.json();
//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error("Failed to fetch API");
//   }
//   return json;
// };

type Param = {
  url: string;
  method: fetchMethod;
  body?: any;
  headers?: any;
};
export const fetchAPI = async ({ url, method, body, headers }: Param) => {
  const token = localStorage.getItem("mytoken");
  const res = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "*/*",
      "Content-Type": "application/json",
      ...headers,
    },
    body: method === "POST" || method === "PUT" ? JSON.stringify(body) : null,
  });

  const json = await res.json();
  // if (json.code !== 200 && json.code !== 401 && method === "GET") {
  //   // openNotification({ method: "ERROR", message: json.message });
  // }
  if (json.message === "Unauthorized") {
    // openNotification({ method: "ERROR", message: json.message });
    // window.location.replace(`/webplatformfront/login`);
    window.location.replace(`/login`);
    localStorage.clear();
  }
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
};

export const fetchFormData = async (
  url: string = PUBLIC_API_URL,
  method: fetchMethod = "GET",
  formData: any
) => {
  const res = await fetch(url, {
    method: method,
    headers: {},
    body: formData,
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
};

export const FetchFile = async ({ url, method, headers }: Param) => {
  try {
    const token = localStorage.getItem("webplatformToken");
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        ...headers,
      },
      method: method || "POST",
    });
    // return res.blob()
    if (res.status === 200) {
      return { code: 200, data: await res.blob() };
    } else {
      return { code: 400, message: res.statusText };
    }
  } catch (err: any) {
    return { success: false, message: err.message };
  }
};
