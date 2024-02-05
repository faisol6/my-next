import { fetchAPI } from "../lib/fetch";
import { PUBLIC_API_URL } from "../lib/constants";
// import { createQueryString } from "../lib/utils";

const baseUrl: string = PUBLIC_API_URL;

interface IUserLogin {
  username: string;
  password: string;
}

export const getAllProduct = async () => {
  //   const queryString = createQueryString(qrs);
  //   const url = baseUrl + "url" + queryString;
  const url = baseUrl + "/todos/";
  const data = await fetchAPI({ url, method: "GET" });
  return data;
};

export const getProductByItemId = async (id: number) => {
  const url = baseUrl + "url" + id;
  const data = await fetchAPI({ url, method: "GET" });
  return data;
};

export const delProductOrderItem = async (id: number) => {
  const url = baseUrl + "url" + `${id}`;
  const data = await fetchAPI({ url, method: "DELETE" });
  return data;
};

export const delFilePlan = async (fileId: number) => {
  const url = baseUrl + "url" + `/${fileId}`;
  const data = await fetchAPI({ url, method: "DELETE" });
  return data;
};

export const onLogin = async (value: IUserLogin) => {
  const url = baseUrl + "/users/auth";
  const data = await fetchAPI({ url, method: "POST", body: value });
  return data;
};
