import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/ShoesSafari', {
        dbName: "ShoesSafari"
    }).then((c) => {
        console.log('Connection Successful')
    }).catch((e) => {
        console.log("ERROR")
        console.log(e)
    })
}