const mongoose=require('mongoose');
const url='mongodb+srv://rishavranjan7102:Gj54fbgwoeWrCGij@cluster0.numgd.mongodb.net';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));
