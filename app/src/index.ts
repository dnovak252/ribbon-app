import express from 'express';


const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req,res) => res.send('Hello world!'));

app.get('/read', (req,res) =>{
  let test = req.query;

  console.log(test);
})

app.post('/create', (req, res)=>{
  let test = req.body;

  res.json(test);
})

app.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send ({
    message : "Update on "+ id +" successful."
  })
})

app.delete('/delete/:id', (req,res) => {
  res.send("DELETE request for " + req.params.id)
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});