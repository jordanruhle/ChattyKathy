const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

// middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({extended:true}));
app.use(express.static(process.env.STATIC_DIR));

app.listen(port, () => console.log(`Listening on port: ${port}`) );