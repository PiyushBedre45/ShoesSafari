import bcrypt from 'bcrypt';
import { User } from "../models/userModel.js";
import { sendCookie } from "../utils/features.js";

// USER REGISTRATION 

export const userRegister = async (req, res) => {

    const { name, email, password } = req.body;

    let user = await User.findOne({ email })

    if (user) {

        res.status(201).json({
            success: true,
            message: "User Already Exist",
            user,
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({
        name, email, password: hashedPassword
    })
    // res.status(201).json({
    //     success: true,
    //     message: "User Register",
    //     user

    // })

    sendCookie(user, res, "register sucessfull", 201);
}

// USER LOGIN

export const userLogin = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return res.status(500).json({
            success: false,
            message: "Invalid Email or Password"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(202).json({
            success: false,
            message: 'Invalid Email or Password'
        })
    }
    sendCookie(user, res, `wellcome back , ${user.name}`, 202);


}

