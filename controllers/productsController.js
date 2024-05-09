const Product = require('../models/Products');
const {uploadImageToCloudinary} = require('../utils/imageUploader')
const sharp = require('sharp')
const fs = require("fs");


const createProducts = async (req, res) => {
    try {
        const { name, description, price} = req.body;
        if (!name || !description || !price ) {

            throw new Error('Missing required fields');
        }

        // Check for required files

        const ProductImage=req.files.ProductImage;

        console.log(ProductImage);


        if (!ProductImage ) {
            throw new Error('Missing required files');
        }

        // Read primary image file
        const imageData = fs.readFileSync(ProductImage.tempFilePath);

        // Compress primary image to WebP format
        const PrimaryWebPimage = await sharp(imageData)
            .webp({ quality: 100 })
            .toBuffer();

        // Upload primary image to Cloudinary
        const PrimaryImageUrl = await uploadImageToCloudinary(
            PrimaryWebPimage,
            process.env.FOLDER_NAME
        );


        // Save product data to database, including image URLs
        const newProduct = new Product({
            name,
            ProductImage: PrimaryImageUrl.secure_url,
            description,
            price,
        });
        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product created successfully', newProduct});
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, price } = req.body;

        // Check if product with given ID exists
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }

        // Update product details
        product.name = name;
        product.description = description;
        product.price = price;

        // Save updated product
        await product.save();

        res.status(200).json({ success: true, message: 'Product updated successfully', product });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const productsById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
        res.status(200).json({ success: true, message: `Successfully found product with ID ${id}`, product });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Product with ID ${id} not found` });
        }
        res.status(200).json({ success: true, message: `Product with ID ${id} successfully deleted`, product });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};






module.exports = {  createProducts ,getProducts,updateProducts,productsById,deleteProducts};

