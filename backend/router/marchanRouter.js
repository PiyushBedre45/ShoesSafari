import express from "express";
import { getAllMarchandises, getMarchandise, newMarchandise } from "../controllers/marchanController.js";
const router = express.Router();

router.route('/marchandise').get(getAllMarchandises);
router.route('/marchandise/new').post(newMarchandise);
router.route('/marchandise/:id').get(getMarchandise);


export default router;