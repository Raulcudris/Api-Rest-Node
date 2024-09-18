import Product from "../models/Product";

export const createProduct = async (req, res)=>{
    const {name , category, price , imgURL} = req.body;
    const newProduct = new Product({name,category,price,imgURL});
    console.log(newProduct);
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved);
    //res.json(productSaved)
}

export const getProducts = async (req, res)=>{
    const products = await Product.find();
    res.json(products);
}

export const getProductById = async (req, res)=>{
   const product = await Product.findById(req.params._id)
   res.status(200).json(product);
}

export const updateProductById = async (req, res)=>{

}

export const deleteProductById = async (req, res)=>{

}


