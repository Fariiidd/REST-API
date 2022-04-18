export const queries = {
    getAllProducts: 'SELECT * FROM products',
    createProducts: 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getOneProduct: 'SELECT * FROM products WHERE id = @id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[products] WHERE id = @id',
    getTotalProducts: 'SELECT COUNT(*) FROM products',
    updateProductById: 'UPDATE products SET name = @name, description = @description, quantity = @quantity WHERE id = @id',
}