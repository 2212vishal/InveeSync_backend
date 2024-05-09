const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authMiddleware');

const {createProducts,getProducts,updateProducts,productsById,deleteProducts} = require('../controllers/productsController')


router.post('/products', authenticateToken, createProducts);
router.get('/products', authenticateToken, getProducts);
router.put('/products/:id', authenticateToken, updateProducts);
router.get('/products/:id', authenticateToken, productsById);
router.delete('/products/:id', authenticateToken, deleteProducts);


module.exports = router;

