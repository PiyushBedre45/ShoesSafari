import app from "./app.js";
import { connectDB } from "./data/database.js";

connectDB()

app.listen(process.env.PORT, () => {
    console.log("We are on port on 3000")

})
