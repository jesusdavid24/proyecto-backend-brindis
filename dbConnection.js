const mongoose = require('mongoose');
const connectionString="mongodb://localhost:27017/PROYECTO";
mongoose.connect(connectionString,{
    useNewUrlParser:true,
    autoIndex:true,
    useCreateIndex:true
});

mongoose.connection.on("connected",()=>{
    console.log("Mongo connected");
});

mongoose.connection.on("disconnected",()=>{
    console.log("Mongo disconnected");
});

mongoose.connection.on("error",()=>{
    console.log("Mongo error");
});