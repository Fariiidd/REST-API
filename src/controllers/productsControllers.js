import { getConnection } from '../database/db.js';

export const getProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM products');

    res.json(result.recordset);
};

export const getOneProduct = (req, res) => {
    res.send("Hello World!");
};

export const createProduct = (req, res) => {
    const { name, description } = req.body;

    console.log(name, description);
};

export const updateProduct = (req, res) => {
    res.send("Hello World!");
};

export const deleteProduct = (req, res) => {
    res.send("Hello World!");
};