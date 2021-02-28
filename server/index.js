const express = require('express');
const app = express();
const { readFile } = require('fs');

// create 
app.post('/api/items', (request, response) => {
    if (err) {
        console.error(err);
        response.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
    }

    console.log('create request!');
});

// read 
app.get('/api/items', (request, response) => {
    readFile('./db.json', (err, json) => {
        if (err) {
            console.error(err);
            response.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
        }

        let obj = JSON.parse(json);
        response.json(obj);
    });
});

// update 
app.put('/api/items', (request, response) => {
    if (err) {
        console.error(err);
        response.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')
    }

    console.log('put request!');
});

// delete 
app.delete('/api/items', (request, reponse) => {
    if (err) {
        console.error(err);
        response.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')
    }

    console.log('delete request!');
});


app.listen(process.env.PORT || 3141, () => { 
    console.log(`App available on port ${process.env.PORT || 3141}`);
});