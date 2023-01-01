const express = require('express');
const dataRouter = require('../routes/dashboard.route')
const basicAuth = require('express-basic-auth');


const PORT = process.env.PORT || 8080
const app = express()

app.use(basicAuth({
    users: { admin: 'admin' },
    challenge: true // <--- needed to actually show the login dialog!
}));

app.use(express.json())
app.use('/api',dataRouter)

app.listen(PORT, ()=>{
    console.log('start on port ' + PORT)
})