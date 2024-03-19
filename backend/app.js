const express = require('express');
const cors = require('cors');
const app = express();
const crypto = require('crypto');
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

const reqUser = async (uuid) => {

    // supabase code for sql query -> select * from users where uuid = uuid
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('uuid', uuid)
    return data;
}

app.get("/api/getUser/:uuid", async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const data = await reqUser(uuid);
        res.json(data);
    } catch (error) {
        res.status(404).send("Error: User not found");
    }
});

app.put('/api/updateUserSettings', async (req, res) => {

    const uuid = req.body.uuid;
    const notifications = req.body.notifications;
    const autoDelete = req.body.autoDelete;
    const colourBlind = req.body.colourBlind;
    const fontSize = req.body.fontSize;
    const language = req.body.language;

    try {
        const { data, error } = await supabase
            .from('users')
            .update({ notifications: notifications, autoDelete: autoDelete, colourBlind: colourBlind, fontSize: fontSize, language: language })
            .eq('uuid', uuid)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }

});

app.post('/api/AddProduct', async (req, res) => {
    try {
        const uuid = req.body.uuid;
        const product_id = req.body.product_id;
        const img_url = req.body.img_url;
        const name = req.body.name;
        const brand = req.body.brand;
        const exp_date = req.body.exp_date;
        let id = 0;

        const { data, error } = await supabase
            .from('products')
            .select('product_id')
            .eq('uuid', uuid)
            .order('product_id', { ascending: false })
            .limit(1);

        if (error) {
            console.log(error);
        }

        if (data.length === 0) {
            id = 1;
        }
        else {

            id = data[0].product_id;
            id++;
        }

        const { } = await supabase
            .from('products')
            .insert({ uuid: uuid, product_id: id, img_url: img_url, name: name, brand: brand, exp_date: exp_date });

        res.sendStatus(201);
    } catch (error) {
        console.log("-->", error);
        res.status(500).send(error);
    }
});


const reqProducts = async (uuid) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('uuid', uuid)
    return data;
}

app.get('/api/fetchAllProducts/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const data = await reqProducts(uuid);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});

const deleteProducts = async (id, uuid) =>{
    return await supabase  
        .from('products')
        .delete()
        .eq('product_id', id)
        .eq('uuid', uuid)
}

app.delete('/api/deleteProducts/:uuid/:product_id', async (req, res) =>{
    const uuid = req.params.uuid;
    const id = req.params.product_id;
    try{
        await deleteProducts(id, uuid);
        res.sendStatus(204);
    }catch(error){
        console.log(error);
    }
});

app.put('/api/updateProducts', async (req, res) =>{
    const uuid = req.body.uuid;
    const product_id = req.body.product_id;
    const name = req.body.name;
    const brand = req.body.brand;
    const exp_date = req.body.exp_date;
    try {
        const { data, error } = await supabase
            .from('products')
            .update({ name: name, brand: brand, exp_date: exp_date })
            .eq('uuid', uuid)
            .eq('product_id', product_id)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

const reqProductSearch = async (uuid, name) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('uuid', uuid)
        .like('name', `%${name}%`) // get everything that contains what is typed
    return data;
}

app.get('/api/fetchProductSearch/:uuid/:name', (req, res) => {
    const uuid = req.params.uuid;
    const name = req.params.name;
    try {
        const data = reqProductSearch(uuid, name);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});


function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const insertNewUser = async (newUser) => {
    const uuid = uuidv4();
    const { error } = await supabase
        .from('users')
        .insert({ uuid: uuid, username: newUser.username, password_hash: newUser.password_hash, notifications: true, autoDelete: true, colourBlind: 0, fontSize: 0, language: 0 });
    return uuid;
};


app.post('/api/RegisterUser', async (req, res) => {
    const newUser = {
        username: req.body.username,
        password_hash: req.body.hashedPassword
    };
    try {
        const uuid = await insertNewUser(newUser);
        res.status(201).send(uuid);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


const reqUsers = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*');
    return data;
}

app.get('/api/FetchAllUsers', async (req, res) => {
    try {
        const data = await reqUsers(); // Wait for the promise to resolve
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); // Send an error response
    }
});

const reqRecipes = async (uuid) => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('uuid', uuid)
    return data;
}

app.get('/api/GetRecipes/:uuid', async (req, res) => {
    const uuid = req.params.uuid;

    try {
        if (uuid === "") {
            res.status(404).send("Error: User not found");
        }
        const data = await reqRecipes(uuid);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).send("Error: User not found");
    }
});




const reqRecipe = async (uuid, recipe_id) => {
    const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .eq('uuid', uuid)
        .eq('recipe_id', recipe_id)
    return data;
}

app.get('/api/GetRecipe/:uuid/:recipe_id', async (req, res) => {
    const uuid = req.params.uuid;
    const recipe_id = req.params.recipe_id;
    try {
        if (uuid === "") {
            res.status(404).send("Error: User not found");
        }
        else if (recipe_id === "") {
            res.status(404).send("Error: Recipe not found");
        }
        const data = await reqRecipe(uuid, recipe_id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).send("Error: Recipe or User not found");
    }
});

app.listen(port, () => {
    console.log(`backend is listening at http://192.168.0.15:${port}`);
}); 