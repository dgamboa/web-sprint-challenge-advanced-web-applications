import { axiosWithAuth } from "../helpers/axiosWithAuth";

export function fetchColors() {
  return axiosWithAuth().get(`/api/colors`);
};