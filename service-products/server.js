const express = require('express')
const app = express()
const port = 3002

const products = [
  {
    "id": 1,
    "name_products": "IPod Nano - 8GB",
    "description": "quis ut nam facilis et officia qui"
  },
  {
    "id": 2,
    "name_products": "IPod Touch 8GB",
    "description": "laboriosam mollitia et enim quasi adipisci quia provident illum"
  },
  {
    "id": 3,
    "name_products": "Hazelnut in black ceramic bowl",
    "description": "illo est ratione doloremque quia maiores aut"
  },
  {
    "id": 4,
    "name_products": "Lemon and salt",
    "description": "molestiae perspiciatis ipsa"
  }
]
app.get('/api/products', (req, res) => res.send({results: products}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
