const express = require('express')
const app = express()
const port = 3001

const customers = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
  },
  {
    "id": 4,
     "name": "Patricia Lebsack",
     "username": "Karianne",
     "email": "Julianne.OConner@kory.org"
  }
]
app.get('/api/customers', (req, res) => res.send({results: customers}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
