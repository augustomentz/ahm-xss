const express = require('express')

const app = express()

const token = 'Xdoia98XJA92DJnxsa898nX'

app.get('/saldo', (req, res) => {
    const reqToken = req.headers.authorization.split(' ')[1];

    if (reqToken == token) {
        console.log(`log: Status consultado em ${new Date().toLocaleTimeString()}`)

        return res.json({ saldo: 32332.0 })
    } else {
        return res.status(401).send('Not authorized')
    }
})

app.listen(9090, () => {
    console.log('api-bank listening port 9090')
})