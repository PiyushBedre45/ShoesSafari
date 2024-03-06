import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "ShoesSafari"
    }).then((c) => {
        console.log('Connection Successful')
    }).catch((e) => {
        console.log("ERROR")
        console.log(e)
    })
}