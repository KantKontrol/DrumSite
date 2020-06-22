const Product = require("../models/product");
const mongoose = require("mongoose");

async function populateDatabase(){
    const fakeData = [
        {
            title: "Drum Shelf",
            image: "https://via.placeholder.com/50",
            desc: "A simple artistic shelf",
            price: 74.99
        },
        {
            title: "Drum Table",
            image: "https://via.placeholder.com/50",
            desc: "a wonderful table",
            price: 125.00
        },
        {
            title: "Drum Lamp",
            image: "https://via.placeholder.com/50",
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/drumTest", {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => populateDatabase());


