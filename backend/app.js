const express = require('express');
const cors = require('cors');
const app = express();
const nuestroCodigo = require("./function.js");

const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://dqiwuoxrobnisaudjows.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxaXd1b3hyb2JuaXNhdWRqb3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODc1NzUsImV4cCI6MjAyMjQ2MzU3NX0.HJCX33c_wZ6hJin5h0NmbXNTY6ghmAoUBW87gjJtzpY"
const supabase = createClient(supabaseUrl, supabaseKey)

const port = 3000;

app.use(cors());
app.use(express.json());

const resquestDevData = async () => {
    const { data, error } = await supabase
        .from('dev')
        .select('*')
    return data;
}

app.get('/', (req, res) => {
    //request to the database
    resquestDevData().then((data) => {
        res.json(data);
    }).catch((error) => { console.log(error) });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API side of the app!' });
});

app.get('/api/:id', (req, res) => {
    res.json({ message: `You access the api with id: ${req.params.id}` });
});


function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// //User insertion into the database
// const insertNewUser = async (newUser) => {
//     console.log("Entra en la funcion")
//     const { data, error } = await supabase
//         .from('users')
//         .insert({
//             uuid: uuidv4(),
//             username: newUser.username,
//             password_hash: newUser.password_hash,
//             notifications: true,
//             autoDelete: true,
//             colourBlind: 0,
//             fontSize: 0,
//             language: 0,
//         })
// }

// app.post('/', async (req, res) =>{

//     //create new user object to insert into the database
//     const newUser = {
//         username: req.body.username,
//         password_hash: req.body.password_hash
//     };

//     await insertNewUser(newUser).catch((error) => { console.log(error) });
//     res.sendStatus(200);
// });

const insertNewUser = async (newUser) => {
    console.log("Entra en la funcion");
    const { data, error } = await supabase
        .from('users')
        .insert({ uuid: uuidv4(), username: newUser.username, password_hash: newUser.password_hash, notifications: true, autoDelete: true, colourBlind: 0, fontSize: 0, language: 0});
};

// Handle POST requests to the root endpoint
app.post('/', async (req, res) => {
    console.log("Entra en POST");

    // Create a new user object to insert into the database
    const newUser = {
        username: req.body.username,
        password_hash: req.body.password_hash,
    };
    console.log(req.body.username);

    try {
        // Insert the new user into the database
        await insertNewUser(newUser);
        console.log("Inserted");
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        // Send a 500 (Internal Server Error) status code and an error message
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`backend is listening at http://localhost:${port}`);
});