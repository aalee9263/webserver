
import express from 'express'
import path from 'path'

    const app = express()
    const port = process.env.PORT || 5001

    app.get('/weather', (req, res) => {
        console.log(`${req.ip} is asking for weather`)
    res.send({
        
        city: "karachi",
        temp: 26,
        humidity: 20,
        max_temp_c: 18,
        min_temp_c: 18,

    })
    })

    const __dirname = path.resolve();

    console.log("__dirname:", __dirname)
    console.log("__dirname:", path.join(__dirname, "/web-page"))
    
    app.get('/', express.static(path.join(__dirname,"/web-page")))
    app.use('/*', express.static(path.join(__dirname,"/web-page")))

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })


