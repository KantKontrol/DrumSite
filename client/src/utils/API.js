import axios from "axios";

const data = [
    {
        title: "Drum Shelf",
        image: "/images/drum/1.jpeg",
        desc: "A simple artistic shelf",
        price: 74.99
    },
    {
        title: "Drum Table",
        image: "/images/drum/7.jpeg",
        desc: "a wonderful table",
        price: 125.00
    },
    {
        title: "Drum Lamp",
        image: "/images/drum/3.jpeg",
        desc: "A atmospheric lamp",
        price: 55.00
    },
    {
        title: "Drum Shelf",
        image: "/images/drum/4.jpeg",
        desc: "A simple artistic shelf",
        price: 74.99
    },
    {
        title: "Drum Table",
        image: "/images/drum/5.jpeg",
        desc: "a wonderful table",
        price: 125.00
    },
    {
        title: "Drum Lamp",
        image: "/images/drum/9.jpeg",
        desc: "A atmospheric lamp",
        price: 55.00
    },
    {
        title: "Drum Shelf",
        image: "/images/drum/2.jpeg",
        desc: "A simple artistic shelf",
        price: 74.99
    },
    {
        title: "Drum Table",
        image: "/images/drum/8.jpeg",
        desc: "a wonderful table",
        price: 125.00
    },
    {
        title: "Drum Lamp",
        image: "/images/drum/6.jpeg",
        desc: "A atmospheric lamp",
        price: 55.00
    }
];

const API = {
    getAllProducts: function(){
        //return axios.get("/api/products");
        return data;
    },
    getLatestProducts: function(){
        //return axios.get("/api/latest");
        return data.splice(data.length-3, data.length);
    }
}

export default API;