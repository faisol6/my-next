import { fetchAPI } from "../lib/fetch";
import { PUBLIC_API_URL } from "../lib/constants";

const baseUrl: string = PUBLIC_API_URL;

interface IUserLogin {
  username: string;
  password: string;
}

export const getAllContent = async () => {
  const url = baseUrl + "/todos/";
  const data = await fetchAPI({ url, method: "GET" });
  return data;
};

export const getContentId = async (id: string) => {
  const url = baseUrl + `/todos/${id}`;
  const data = await fetchAPI({ url, method: "GET" });
  return data;
};

export const createContentApi = async (value?: { title: string; description: string; }) => {
  const url = baseUrl + `/todos/`;
  const data = await fetchAPI({ url, method: "POST", body: value });
  return data;
};

export const delContentId = async (id: string) => {
  const url = baseUrl + `/todos/${id}`;
  const data = await fetchAPI({ url, method: "DELETE" });
  return data;
};

export const onLogin = async (value: IUserLogin) => {
  const url = baseUrl + "/users/auth";
  const data = await fetchAPI({ url, method: "POST", body: value });
  return data;
};
