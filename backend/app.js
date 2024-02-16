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

const reqProducts = async (uuid) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('uuid', uuid)
    return data;
}

app.get('/api/fetchAllProducts/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    try {
        const data = reqProducts(uuid);
        res.json(data);
    } catch (error) {
        console.log(error);
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

app.listen(port, () => {
    console.log(`backend is listening at http://localhost:${port}`);
});
