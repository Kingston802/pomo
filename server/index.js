const express = require('express');
const app = express();
const { readFile, writeFile } = require('fs');
const { exec } = require("child_process");
const { exit } = require('process');

try {
    let file = require('./db.json');
} catch {
    exec(`echo '{"tasks": []}' > ./db.json`, (err, stdo, stde) => {
        if (err) {
            console.error(err);
            exit();
        }
    })    
}
let file = require('./db.json');

// create 
app.post('/api/items', (request, response) => {
    // make changes 
    file.tasks.push(request.query.task);

    // write changes to file 
    writeFile('./db.json', JSON.stringify(file), (err) => {
        if (err) {
            console.error(err);
            response.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
        }
        console.log(JSON.stringify(file));
        console.log('writing to db.json');
    });

    // respond with file 
    response.send(file);
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
app.delete('/api/items', (request, response) => {
    // make changes 
    let deleted = false;
    file.tasks = file.tasks.filter(task => {
        if (task === request.query.task && !deleted) {
            deleted = true;
            return false;
        } else {
            return true;
        }
    });

    // write changes to file 
    writeFile('./db.json', JSON.stringify(file), (err) => {
        if (err) {
            console.error(err);
            response.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
        }
        console.log(JSON.stringify(file));
        console.log('writing to db.json');
    });

    // respond with file 
    response.send(file);
});


app.listen(process.env.PORT || 3141, () => { 
    console.log(`App available on port ${process.env.PORT || 3141}`);
});