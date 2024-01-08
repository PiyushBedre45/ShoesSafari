import express from "express";
import { getAllMarchandises, getBags, getCaps, getMarchandise, getMenMerchandise, getWomenMerchandise, newMarchandise } from "../controllers/marchanController.js";

const router = express.Router();

router.route('/marchandise').get(getAllMarchandises);
router.route('/marchandise/new').post(newMarchandise);
router.route('/marchandise/regular/men').get(getMenMerchandise);
router.route('/marchandise/regular/women').get(getWomenMerchandise);
router.route('/marchandise/regular/bag').get(getBags);
router.route('/marchandise/regular/cap').get(getCaps);
router.route('/marchandise/:id').get(getMarchandise);


export default router;