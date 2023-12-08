import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "plz enter the name of product"]

    },
    discription: {
        type: String,
        require: [true, "plz enter the discription of product"]

    },
    price: {
        type: Number,
        require: [true, "plz enter the valid price of the product"],
        maxLength: [8, 'price cannot exceed 8 char']

    },
    series: {
        type: String,
        require: true,


    },
    rating: {
        type: Number,
        default: 0,

    },
    images: [{

        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    }],
    color: [{

        public_id: {
            type: String,
            required: true,
        },
        option1: {
            type: String,
            required: true,
        },
        option2: {
            type: String,
            required: true,
        }
    }],
    shoesType: {
        type: String,
        required: [true, "Enter the type of shoes"]
    },
    category: {
        type: String,
        require: [true, "enter the category of the product"]
    },
    stock: {
        type: String,
        require: [true, "enter the stock of the product"],
        maxLength: [4, "stock length cannot exceed 4 char"],
        default: 1,
    },
    reviews: [{
        name: {
            type: String,
            require: true,
        },
        rating: {
            type: String,
            require: true,
        },
        comment: {
            type: String,
            require: true,

        },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
const Product = new mongoose.model("Product", productSchema)

export default Product;