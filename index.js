const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(res);
    res.send({ message: 'Hello Everyone!' });
});

async function getProducts() {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products')
    return (await response).data;
}
async function getProductsWithId(id) {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products/' + id);
    return (await response).data;
}

app.get('/products', async(req, res) => {
    const products = await getProducts();
    res.send(products);
    })

app.get('/products/:id', async(req, res) => {
    const products = await getProductsWithId(req.params.id);
    res.send(products);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});