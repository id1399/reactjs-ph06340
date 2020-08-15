import http from "./axiosHttp";

const getAll = () => {
    return http.get("/status");
};

const get = id => {
    return http.get(`/status/${id}`);
};

const create = data => {
    return http.post("/status", data);
};

const update = (id, data) => {
    return http.put(`/status/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/status/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};