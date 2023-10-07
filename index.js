const express = require('express')
const app = express()

//Routes
app.use('/', require('./start/routes'));

const port = 3000

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
