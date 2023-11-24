import Product from "../models/productModel.js"

// ADD NEW PRODUCT INTO THE DATABASE ---- ONLY FOR ADMIN

export const newProduct = async (req, res, next) => {

    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        message: "add new products",
        product,

    })

}


// GET ALL PRODUCT FROM THE DATABASE

export const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json({
        success: true,
        message: "get all products",
        products,

    })
}

// UPDATE PRODUCT FROM THE DATABASE ---- ONLY FOR ADMIN

export const updateProduct = async (req, res) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found",
        })


    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product,
    })
}

// DELETE PRODUCT FROM THE DATABASE ---- ONLY FOR ADMIN 

export const deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found",
        })
    }

    await Product.deleteOne()

    res.status(200).json({
        success: true,
        message: "Product get deleted from the database"
    })
}


// GET A PRODUCT 

export const getProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found",
        })
    }

    res.status(200).json({
        success: true,
        product,
    })
}

// GET ICONIC PRODUCT

export const getIconic = async (req, res) => {
    const iconic = await Product.find({ shoesType: 'Iconic' });
    res.status(201).json({
        success: true,
        message: 'Iconic Shoes Found',
        iconic,

    })
}

// GET REGULAR PRODUCT

export const getRegular = async (req, res) => {
    const regular = await Product.find({ shoesType: 'Regular' });
    res.status(201).json({
        success: true,
        message: 'Regular Shoes Found',
        regular,

    })
}