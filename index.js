const express=require("express");
const bodyParser=require("body-parser");
const router= require("./router/router");
const requestconfigs=require("./requestConfigs");
require("./dbconnection");

const app=express();
const port=8050;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(requestconfigs.setHeaders);
app.use("/",router);

app.listen(port,()=>{
    console.log(`servidor levantado en ${port}`);
});