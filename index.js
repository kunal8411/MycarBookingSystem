const express= require('express');
const path= require('path');
const port= 8000;
const cookieParser= require('cookie-parser');
var app = express();
app.use(express.urlencoded());
const expressLayout=require('express-ejs-layouts');
app.use(cookieParser());

const boduparser= require('body-parser');
const passport=require('passport');
const passportJwt= require('./config/passport-jwt-strategy')
const mongoose= require('./config/mongoose');


const ejs= require('ejs');
// const session= require('express-session');
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.json());
// app.use(expressLayout);
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);

app.use('/',require('./routes/index'))




app.listen(port, function(err){
    if(err){
        console.log('Error in connnecting to port ',port );
    }
    console.log('Connected to port no:',port)
})