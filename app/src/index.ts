import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req,res) => res.send('Hello world!'));

app.get('/read', (req,res) =>{
  var test = req.query;

  console.log(test);
})

app.post('/create', (req, res)=>{
  var test = req.body;

  res.json(test);
})

app.delete('/delete/:id', (req,res) => {
  res.send("DELETE request for " + req.params.id)
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});