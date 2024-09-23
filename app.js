const express = require('express');

const app = express();

app.use(express.json());

let users = [
    {id: '1', email: 'abc@def.com', password: '1234'},
    {id: '2', email: 'abc@def.com', password: '6536'}
]


app.get('/get', (req, res) => {
    res.send(users);
})

app.get('/get/:id', (req, res) => {
    let user;
    let id = req.params.id;
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (id == element.id) {
            user = element;
        }
    }
    if (!user) {
        res.send('No objects')
    }
    else {
        res.send(user);
    }
})

app.post('/post', (req, res) => {
    let user = req.body;
    users.push(user);
    res.send(users);
})

app.put('/put/:id', (req, res) => {
    let user = req.body;
    let id = req.params.id;
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.id == id) {
            element.email = user.email;
            element.password = user.password;
        }
    }
    res.send(users);
})

let port = process.env.PORT || '3002';


app.listen(port, () => {
    console.log(`Lets go to ${port}!`);
});