const Product = require("../models/product");
const mongoose = require("mongoose");

async function populateDatabase(){
    const fakeData = [
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


    Product.insertMany(fakeData, (error, res) => {
        if(error) console.log(error);

        console.log(res);
        return;
    });
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://db:p57um8k3@ds011840.mlab.com:11840/heroku_d4f8mndc", {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => populateDatabase());


