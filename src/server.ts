import express from 'express';
import { default as axios } from 'axios';


const app = express();


app.get('/',async (req,res)=>{
  
 try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send({data:response.data}).status(200);
 } catch (error) {
  console.log(error);
 }
});


const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Services Running on Port ${port}`));