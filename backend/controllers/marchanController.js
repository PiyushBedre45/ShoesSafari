import Marchandise from "../models/marchanModel.js";


// ADD NEW MARCHANDISE INTO THE DATABASE ---- ONLY FOR ADMIN
export const newMarchandise = async (req, res) => {
    const marchan = await Marchandise.create(req.body);
    res.status(201).json({
        sucsess: true,
        message: "add new marchandise",
        marchan,
    })

}
// GET ALL Marchandise FROM THE DATABASE

export const getAllMarchandises = async (req, res) => {
    const marchan = await Marchandise.find()
    res.json({
        success: true,
        message: "get all Marchandises",
        marchan,

    })
}

// GET A Marchandise 

export const getMarchandise = async (req, res) => {
    let marchan = await Marchandise.findById(req.params.id)
    if (!marchan) {
        return res.status(500).json({
            success: false,
            message: "Marchandise not found",
        })
    }

    res.status(200).json({
        success: true,
        marchan,
    })
}