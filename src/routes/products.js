import express from "express";
import {
    getProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getTotalProducts,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);  
router.get('/count/total', getTotalProducts);  
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;