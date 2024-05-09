const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ProductImage: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Export the Product model
module.exports = mongoose.model("Product", productSchema);
