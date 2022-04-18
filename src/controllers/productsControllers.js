import { queries, getConnection} from '../database/index.js';
import sql from 'mssql';

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
    
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getOneProduct = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.getOneProduct)

    res.send(result.recordset[0]);
};

export const createProduct = async (req, res) => {
    const { name, description } = req.body;
    let { quantity } = req.body;

    try {
        if (!name == null || description == null) {
            return res.status(400).json({message: "Bad Request. Please fill all fields"});
        }
    
        if(quantity == null) quantity = 0;
    
        const pool = await getConnection();
        await pool.request()
        
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('quantity', sql.Int, quantity)
        .query(queries.createProducts);
    
        res.json({name, description, quantity});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const updateProduct = async (req, res) => {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    if ((name == null || description == null, quantity == null)) {
        return res.status(400).json({message: "Bad Request. Please fill all fields"});
    }

    const pool = await getConnection();
    await pool.request()
    .input('name', sql.VarChar, name)
    .input('description', sql.Text, description)
    .input('quantity', sql.Int, quantity)
    .input('id', sql.Int, id)
    .query(queries.updateProductById)

    res.json({name, description, quantity});
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input('id', id)
    .query(queries.deleteProduct)

    res.send(result);
};

export const getTotalProducts = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalProducts)
    
    res.json(result.recordset[0]['']);
};
