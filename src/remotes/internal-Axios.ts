import Axios from "axios";

const server = "http://localhost:8080";

export const internalAxios = Axios.create({
    baseURL: server,
});