import express from "express";
import { deleteProduct, getAllProducts, getIconic, getProduct, getRegular, newProduct, updateProduct } from "../controllers/productController.js";
const router = express.Router();

router.route('/product').get(getAllProducts);
router.route('/product/new').post(newProduct);
router.route('/product/iconic').get(getIconic);
router.route('/product/regular').get(getRegular);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProduct);

export default router;