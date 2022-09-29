const express = require('express');

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        name: 'Guillermo Vidal',
        age: '32',
        country: 'México'
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        hobbies: 'filmmaking',
        hobbies1: 'reading',
        hobbies2: 'swimming'
        

    })
})

app.patch('/metas', (request, response) => {
    response.status(200).json({
        meta: 'been a programer',
        meta1: 'been a filmmaking'

    })
})


app.put('/business', (request, response) => {
    response.status(200).json({
        entreprise: 'Globant',
        entreprise1: 'Google',
        entreprise2: 'Starlink'

    })
})




app.listen(8000, () => {
    console.log('Server started at port 8000')
})



