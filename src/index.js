dotenv.config();
import dotenv from 'dotenv';
import express from "express";
import productRoute from './routes/products.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productRoute);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));