import axios from "axios";

const API = {
    getAllProducts: function(){
        return axios.get("/api/products");
    },
    getLatestProducts: function(){
        return axios.get("/api/latest");
    }
}

module.exports = API;