import mongoose from "mongoose";

const marchanSchema = new mongoose.Schema({

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
    itemType: {
        type: String,

    },
    category: {
        type: String,

    },
    stock: {
        type: String,

        maxLength: [4, "stock length cannot exceed 4 char"],
        default: 1,
    },


    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Marchandise = new mongoose.model("Marchandise", marchanSchema);

export default Marchandise;