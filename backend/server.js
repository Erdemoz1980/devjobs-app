const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const connectDB = require('./config/db');
const schema = require('./schema/schema')


const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:process.env.NODE_ENV==='dev'
}))



app.listen(port, ()=>console.log(`Server is listening on port:${port}`))
