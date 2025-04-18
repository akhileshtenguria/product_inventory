const products = require("../models/products");
const productsModel = require("../models/products");


const addproductStock = async (req, res) => {
    // res.send("catory");


    console.log(req.body);
    try {
        const { product, quantity, price } = req.body;

        if (!product || !quantity || !price) {
            return res.status(500).send({
                success: false,
                message: "all the field is required!"
            })
        }
        const existProduct = await productsModel.find({ product });
        if (existProduct.length > 0) {
            return res.status(201).send({
                success: true,
                message: "This Product already created",
                // alreadyfood
            })
        }
        const products = await productsModel.create({
            product,
            quantity,
            price
        });


        if (products) {
            return res.status(201).send({
                success: true,
                message: " Created Successfully.",
                products
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: true,
            message: "Product create api error."
        })
    }
};

const productStock = async (req, res) => {
    // res.send("catory");
    console.log(req.body);
    try {
        const ProductStock = await productsModel.find({});
        if (ProductStock.length == 0) {
            return res.status(201).send({
                success: true,
                message: "No Product Found!",
                // alreadyfood
            })
        }

        if (ProductStock) {
            return res.status(201).send({
                success: true,
                message: " Product List Successfully.",
                ProductStock
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: true,
            message: "Product create api error."
        })
    }
};


const addTransaction = async (req, res) => {
    const { product, quantity, type } = req.body;
    if (!product || !quantity || !type) {
        return res.status(400).json({success: false, error: 'Missing required fields' });
    }
    const productData = await productsModel.findOne({ product: product });
    if(!productData){
        return res.status(400).json({success: false, error: 'This Product is not available' });
    }
    let productStock = Number(productData['quantity']);
     const qantity = Number(quantity);
    switch (type) {
        case 'sale':
            if (productStock < qantity) {
                return res.status(400).json({success: false, error: 'Insufficient stock' });
            }
            productStock -= qantity;
            break;

        case 'purchase':
            productStock += qantity;
            break;

        case 'return':
            productStock += qantity;
            break;

        default:
            return res.status(400).json({success: false, error: 'Invalid transaction type' });
    }
    const updateData = await productsModel.findOneAndUpdate({ product: product }, { quantity: productStock });

    res.json({success: true,  message: 'Transaction recorded', stock: productStock });
};

module.exports = { productStock, addTransaction, addproductStock };