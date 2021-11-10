const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) =>{
    res.send('WOW!!!!! i am excited i by the way am learning node and epress')
})

const users = [
    {id: 0, name: 'sabana', email: 'shabana@gmail.com', phone: '017024155'},
    {id: 1, name: 'sabana', email: 'shabana@gmail.com', phone: '017024155'},
    {id: 2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '017544155'},
    {id: 3, name: 'Saniya', email: 'Saniya@gmail.com', phone: '017024155'},
    {id: 4, name: 'Rapoya', email: 'shabana@gmail.com', phone: '017024155'},
    {id: 5, name: 'Raki', email: 'Raki@gmail.com', phone: '017024155'},
    {id: 6, name: 'Rajiya', email: 'Rajiya@gmail.com', phone: '017024155'},
    {id: 7, name: 'Mafia', email: 'Mafia@gmail.com', phone: '017024155'},
];
app.get('/users', (req, res) =>{
    const search = (req.query.search);
    if(search){
        const searchResut  = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResut);
    }
    else{
        res.send(users)
    }
    console.log(search);
    res.send(users)
});

// app.Method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post');
    res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user); 
})

app.get('/fruit/mango/fazli', (req, res) =>{
   res.send('Yami Yam fazli')
})

app.get('/fruits', (req, res) =>{
    res.send('YaHooooo Fruits')
})

app.listen(port, () =>{
    console.log('listen to port', port)
})